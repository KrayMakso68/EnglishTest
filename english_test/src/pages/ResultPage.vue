<template>
  <q-page class="row flex flex-center justify-center">
    <div class="col-4">
      <div>
        <DoughnutChart :chartData="testData"/>
      </div>
    </div>
    <div class="col-5 shadow-1">
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-6 q-pt-md">
            <div v-if="testFlag" class="text-h5 text-weight-bold q-mt-sm q-mb-xs">Результат теста:</div>
            <div v-else class="text-h5 text-weight-bold q-mt-sm q-mb-xs">Результат тренировки:</div>
            <div class="text-h2 text-weight-bold text-green q-pt-lg">
              {{percents}}%
            </div>
          </q-card-section>

          <q-card-section class="col-6 flex flex-center q-pa-none">
            <q-img
              class="rounded-borders card-img"
              src="../assets/results.svg"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn to="/" @click="resetTest" class="text-weight-bold full-width" color="indigo-6" icon="home" label="На главную" />
          <q-btn v-show="falseQuestions.length !== 0" @click="basic = true" class="text-weight-bold full-width q-mt-sm" color="red-5" icon="stop" label="Просмотр ошибок" />

          <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
            <q-card style="min-width: 700px">
              <q-card-section>
                <div class="text-h6 text-weight-bold">Ошибки:</div>
              </q-card-section>

              <q-card-section  class="q-pt-none">
                <q-card v-for="que in falseQuestions"
                        class="q-mt-md bg-red-2"
                >
                  <q-card-section class="text-center">
                    <div class="text-h5 text-weight-bold">{{que.phrase}}</div>
                    <q-separator />
                    <div class="q-gutter-x-sm no-wrap q-mt-sm">
                      <q-chip size="lg"
                              color="red"
                              v-for="el in que.nowAnswers"
                              :key="el"
                      >
                        {{getWordTitleById(el)}}
                      </q-chip>
                    </div>
                    <div class="q-gutter-x-sm no-wrap">
                      <q-chip size="lg"
                              color="green"
                              v-for="el in que.rightAnswers"
                              :key="el"
                      >
                         {{getWordTitleById(el)}}
                      </q-chip>
                    </div>
                  </q-card-section>


                </q-card>


              </q-card-section>

              <q-card-actions align="center">
                <q-btn flat label="Закрыть" class="text-weight-bold" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </q-card-actions>
      </q-card>
    </div>



  </q-page>
</template>

<script>
import {computed, defineComponent, ref} from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import {useStore} from "vuex";

Chart.register(...registerables);
export default defineComponent({
  name: 'ResultPage',
  components: { DoughnutChart },

  setup() {
    const $store = useStore()
    const basic = ref(false)
    $store.commit('testModule/setResult')

    const words = $store.getters['testModule/getWords']
    const trueAns = $store.getters["testModule/getResultTrue"]
    const falseAns = $store.getters["testModule/getResultFalse"]
    const percents = $store.getters["testModule/getResultPercents"]
    const falseQuestions = $store.getters["testModule/getFalseQuestionsWithRightAnswers"]
    const testFlag = $store.getters["testModule/getIsTestFlag"]

    const testData = {
      labels: ['Верно', 'Неверно'],
      datasets: [
        {
          data: [trueAns, falseAns],
          backgroundColor: ['#4ce854', '#de4e5d'],
        },
      ],
    }
    function resetTest() {
      $store.commit('testModule/resetTest')
    }

    function getWordTitleById(Id) {
      if (Id !== null)
        return words.at(Id).title
      else
        return "нет ответа"
    }

    return {
      basic,
      falseQuestions,
      testData,
      percents,
      testFlag,
      resetTest,
      getWordTitleById
    };
  },
})
</script>

<style lang="scss" scoped>

</style>

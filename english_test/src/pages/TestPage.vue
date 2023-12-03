<template>
  <q-page class="row justify-center q-pt-sm-none q-pt-md-md q-pt-lg-lg q-pt-xl-xl">
    <div class="col-sm-12 col-md-11 col-lg-10 q-pt-sm-none q-pt-md-md q-pt-lg-lg q-pt-xl-xl">
      <div class="row full-height">
        <div class="col-12 self-start">
          <div
            class="row justify-between text-center bg-light-green-2 shadow-2 no-wrap q-mb-xs"
            style="border-radius: 6px; padding-top: 2px"
            v-for="phrase in phrases"
            :key="`row-${phrase.number}`"
          >
            <div class="col-6 q-mt-xs">
              <div class="text-subtitle1 text-weight-medium q-mb-xs">{{ phrase.title }}</div>
            </div>
            <div class="col-6 self-center">
              <div class="row q-gutter-xs no-wrap">    <!-- контейнеры dropable -->
                <div class="col bg-deep-orange-3 rowItemBox items-center"
                     v-for="cont in [1,2,3]"
                     @drop="onDropSingle($event, Number(`${phrase.number}`+String(cont)), phrase.number, cont)"
                     @dragover.prevent
                     @dragenter.prevent
                >
                  <q-chip
                    size="15px"
                    class="chipStyle "
                    color="deep-orange-3"
                    v-for="word in words.filter(x => x.containerId === Number(`${phrase.number}`+String(cont)) )"
                    :key="word.id"
                    @dragstart="onDragStart($event, word, {question: phrase.number, container: cont})"
                    draggable="true"
                  >
                    <div class="text-subtitle1 text-weight-bold q-mx-auto">
                      {{ word.title }}
                    </div>
                  </q-chip>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 q-gutter-sm items-center self-start bg-blue-1 q-mt-sm"
             style="min-height: 120px; border-radius: 5px"
             @drop="onDrop($event, 0)"
             @dragover.prevent
             @dragenter.prevent
        >
          <q-chip
            square
            size="15px"
            class="chipStyle"
            color="deep-orange-3"
            v-for="word in words.filter(x => x.containerId === 0)"
            :key="`xs-${word.id}`"
            @dragstart="onDragStart($event, word)"
            draggable="true"
          >
            <div class="text-subtitle1 text-weight-bold q-mx-auto">
              {{ word.title }}
            </div>
          </q-chip>
        </div>

        <div class="col-12 self-end">
          <div class="row q-pb-sm text-no-wrap justify-between">
            <div class="col">
              <q-btn to="/" v-show="!isTest" @click="resetTest" class="text-weight-bold" color="indigo-6" icon="home" label="На главную" />
            </div>
            <div class="col">
              <div v-if="isTest" class="text-h4 text-weight-bold text-indigo-13 text-center">
                {{timerString}}
              </div>
            </div>
            <div class="col text-right">
              <q-btn to="result" class="text-weight-bold" color="red" icon-right="send" label="Завершить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {computed, defineComponent} from 'vue'
import { ref } from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
export default defineComponent({
  name: 'TestPage',
  props: {
    isTest: Boolean,
    required: false,
    default: false,
  },
  setup(props) {
    const $store = useStore();
    const router = useRouter()

    $store.commit('testModule/setTestCount')
    $store.commit('testModule/setNowTestVariant')
    if (props.isTest)
      $store.commit('testModule/setIsTestFlag')
    const words = computed(() => $store.getters['testModule/getWords'])
    const phrases = $store.getters["testModule/getPhrases"]
    const currentTime = ref(5)  //время таймера в минутах
    const timer = ref()
    const timerString = ref('_:__')

    function onDragStart(event, word, questionData) {
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData('wordId', word.id.toString())
      if (questionData) {
        event.dataTransfer.setData('question', questionData.question)
        event.dataTransfer.setData('container', questionData.container)
      }
    }
    function onDrop(event, containerId) {
      const wordId = parseInt(event.dataTransfer.getData('wordId'))
      const lastQuestion = parseInt(event.dataTransfer.getData('question'))
      const lastContainer = parseInt(event.dataTransfer.getData('container'))
      $store.commit('testModule/updateCatIDinWords', {wordId, containerId})
      $store.commit('testModule/setAnswerInNull', {question: lastQuestion, container: lastContainer})
    }
    function onDropSingle(event, containerId, question, container) {
      const wordId = parseInt(event.dataTransfer.getData('wordId'))
      const lastQuestion = parseInt(event.dataTransfer.getData('question'))
      const lastContainer = parseInt(event.dataTransfer.getData('container'))
      let count = 0;
      words.value.forEach((word) => {
        if (word.containerId === containerId) {
          count++
        }
      })
      if (!count) {
        $store.commit('testModule/updateCatIDinWords', {wordId, containerId})
        $store.commit('testModule/setAnswerNow', {wordId, question, container})
      }
      if (question !== lastQuestion || container !== lastContainer) {
        $store.commit('testModule/setAnswerInNull', {question: lastQuestion, container: lastContainer})
      }
    }
    function startTimer() {
      let start_time = new Date();
      let stop_time = start_time.setMinutes(start_time.getMinutes() + currentTime.value);

      this.timer = setInterval(() => {
        let now = new Date().getTime();
        let remain = stop_time - now;
        let min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
        let sec = Math.floor( (remain % (1000 * 60)) / 1000 );
        sec = sec < 10 ? "0" + sec : sec;

        timerString.value = min + ":" + sec;

        if (remain < 0) {
          clearInterval(timer.value);
          timerString.value = "_:__"
          router.push({ path: 'result' })
        }
      }, 1000)
    }

    function resetTest() {
      $store.commit('testModule/resetTest')
    }

    return {
      words,
      phrases,
      currentTime,
      timer,
      timerString,
      startTimer,
      onDragStart,
      onDrop,
      onDropSingle,
      resetTest
    }
  },
  mounted() {
    if (this.isTest)
      this.startTimer()
  },
  destroyed() {
    clearInterval(this.timer.value);
  }
});
</script>

<style lang="scss" scoped>
.rowItemBox {
  min-height: 39px;
  border-radius: 30px;
  min-width: 100px;
}
.chipStyle {
  margin-top: 5px;
  min-width: 100px;
}
</style>

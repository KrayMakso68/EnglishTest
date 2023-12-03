<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" flat bordered style="width: 80%">
      <q-card-section
        style="width: 85%"
        class="q-pb-none"
      >
        <div class="text-h6 text-weight-bold">
          О программе:
        </div>
        <div class="text-body1">
          Данная программа направлена на проверку текущих знаний курса английского языка, а также способствует уствоению
          материала путём прохождения курсантами тренировочных тестов на самоподготовке.
        </div>
        <br><br>
        <div class="text-h6 text-weight-bold ">
          Руководство пользователя:
        </div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Главная страница" name="one" />
        <q-tab label="Страница тренировки" name="two" />
        <q-tab label="Страница теста" name="three" />
        <q-tab label="Страница результатов" name="four" />
      </q-tabs>

      <q-separator/>
      <q-separator/>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one" class="tabList full-width">
          <div class="row justify-between">
            <div class="col-5 flex flex-center">
              <div class="text-subtitle1">
                При входе в программу пользователь попадает на главную страницу. На ней представлена основная
                функциональность приложения,
                доступная пользователю:
                <br><br>
                <div class="text-body1">
                  1) Страница для прохождения тренировки
                </div>
                <br>
                <div class="text-body1">
                  2) Страница для прохождения теста
                </div>
              </div>
            </div>
            <div class="col-6">
              <q-img
                class="rounded-borders shadow-15"
                src="../assets/usergide/home.png"
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="two" class="tabList full-width">
           <div class="row justify-between">
            <div class="col-5 flex flex-center">
              <div class="text-subtitle1">
                На данной странице пользователю предложено пройти тест в тренировочном режиме, без таймера обратного отчёта.
              </div>
            </div>
            <div class="col-6">
              <q-img
                class="rounded-borders shadow-15"
                src="../assets/usergide/training.png"
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="three" class="tabList full-width">
          <div class="row justify-between">
            <div class="col-5 flex flex-center">
              <div class="text-subtitle1">
                На данной странице пользователю предложено пройти тест на оценку и с ограничением времени на выполнение.
                Выполнение теста автоматически завершится при окончании выделенного времени. Также пользователь может
                завершить тест досрочно.
              </div>
            </div>
            <div class="col-6">
              <q-img
                class="rounded-borders shadow-15"
                src="../assets/usergide/test.png"
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="four" class="tabList full-width">
          <div class="row justify-between">
            <div class="col-5 flex flex-center">
              <div class="text-subtitle1">
                На последней странице пользователю предложено ознакомиться с результатами тестирования,
                а также просмотреть те вопросы, на которые был дан неверный ответ.
              </div>
            </div>
            <div class="col-6">
              <q-img
                class="rounded-borders shadow-15"
                src="../assets/usergide/result.png"
              />
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'AboutPage',
  setup () {
    return {
      tab: ref('one')
    }
  }
})
</script>

<style lang="scss" scoped>
.tabList {
  height: 40vh;
  width: 50vw
}
</style>

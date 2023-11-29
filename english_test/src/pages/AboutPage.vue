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
          Данная программа направлена на проверку текущих знаний курса английского языка, а также способствует уствоению материала путём прохождения курсантами тренировочных тестов на самоподготовке
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

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one" class="tabList full-width">
          <div class="row">
            <div class="col-6">
              fff
            </div>
            <div class="col-6">
              <q-img
                class="rounded-borders"
                src="../assets/results.svg"
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="two" class="tabList">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>

        <q-tab-panel name="three" class="tabList">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>

        <q-tab-panel name="four" class="tabList">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
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

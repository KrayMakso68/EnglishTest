<template>
  <q-page class="flex flex-center">
    <div class="row justify-evenly">
      <div class="col-xs-11 col-sm-10 col-md-5 q-mt-xl">
        <q-card class="full-height" bordered>
          <q-card-section horizontal class="main-card-text">
            <q-card-section class="q-pt-xs">
              <div class="text-h5 text-weight-bold q-mt-sm q-mb-xs">Тренировка</div>
              <q-separator />
              <br>
              <div class="text-caption text-grey">
                 Вы можете проверить свои знания и попрактиковаться в решении задания без оценки и ограничения времени на решение
              </div>
            </q-card-section>

            <q-card-section horizontal class="col-5 flex flex-center ">
              <q-img
                class="rounded-borders card-img"
                src="src/assets/img-streamlinehq-team-brainstorming-work.svg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn push to="test" color="indigo-6 full-width" class="q-mb-xl q-mt-xs">
              <div class="text-overline text-weight-bold">
                Начать тренировку
              </div>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-11 col-sm-10 col-md-5 q-mt-xl">
        <q-card class="full-height" bordered>
          <q-card-section horizontal class="main-card-text" >
            <q-card-section class="q-pt-xs">
              <div class="text-h5 text-weight-bold q-mt-sm q-mb-xs">Тестирование</div>
              <q-separator />
              <br>
              <div class="text-caption text-grey">
                Вам предлагается пройти контрольный тест с органичением времени выполнения и оценкой званий<br>Решайте внимательно!
              </div>
            </q-card-section>

            <q-card-section horizontal class="col-5 flex flex-center q-pa-sm">
              <q-img
                class="rounded-borders card-img"
                src="src/assets/streamlinehq-education-online-exams-tests-education-os.svg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn push color="deep-orange-12 full-width" class="q-mb-xl q-mt-xs">
              <div class="text-overline text-weight-bold">
                Начать тестирование
              </div>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
.card-img {
  max-width: 90%;
  //height: 90%;
  object-fit: fill;
  vertical-align: top
}
.main-card-text {
  height: 80%;
}

</style>

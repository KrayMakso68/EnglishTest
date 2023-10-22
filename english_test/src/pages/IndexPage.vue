<template>
  <q-page class="flex flex-center">
    <div class="row justify-evenly">
      <div class="col-5">
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">Тренировка</div>
              <q-separator />
              <div class="text-caption text-grey">
                 Вы можете проверить свои знания и попрактиковаться в решении задания без оценки и ограничения времени на решение
              </div>
            </q-card-section>

            <q-card-section class="col-6 flex flex-center">
              <q-img
                class="rounded-borders card-img"
                src="src/assets/img-streamlinehq-team-brainstorming-work.svg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat>
              7:30PM
            </q-btn>
            <q-btn flat color="primary">
              Reserve
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-5">
        <q-card class="my-card" bordered>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">Тестирование</div>
              <q-separator />
              <div class="text-caption text-grey">
                Вам предлагается пройти контрольный тест с органичением времени выполнения и оценкой званий<br>Решайте внимательно!
              </div>
            </q-card-section>

            <q-card-section class="col-6 flex flex-center card-img">
              <q-img
                class="rounded-borders"
                src="src/assets/streamlinehq-education-online-exams-tests-education-os.svg"
              />
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat>
              7:30PM
            </q-btn>
            <q-btn flat color="primary">
              Reserve
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
  height: 160px;
  max-width: 160px;
}
</style>

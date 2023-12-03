<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" flat bordered style="width: 40%">
      <q-card-section
        style="width: 100%"
        class="q-pb-none"
      >
        <div class="text-h6 text-weight-bold">
          Авторы программы:
        </div>
        <br>
        <div class="text-body1">
          <b>к-т Краюшкин М.Р.</b> 314 учебная группа
        </div>
        <br>
        <div class="text-body1">
          <b>к-т Смирнов Д.В.</b> 314 учебная группа
        </div>
        <br><br>
        <div class="text-body1">
          Под общим руководством <b>Беликовой О.Н.</b>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'AuthorsPage',
  setup () {
    return {
      tab: ref('one')
    }
  }
})
</script>

<style lang="scss" scoped>

</style>

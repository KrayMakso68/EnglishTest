<template>
  <q-page class="row items-start justify-center q-pt-lg">
    <!--    {{ $store.state.moduleTest.likes }}-->
    <div class="col-xs-12 col-sm-11 col-md-8">
      <div
        class="row justify-between text-center bg-light-green-2 shadow-1"
        style="border-radius: 6px; padding-top: 2px"
        v-for="n in 10" :key="`xxx-${n}`"
      >
        <div class="col-4">
          <div class="q-ma-none text-h6 text-no-wrap">измерять величину тока</div>
        </div>
        <div class="col-6 text-no-wrap">
          <div class="q-gutter-xs">   <!-- контейнеры dropable -->
            <q-chip
              size="15px"
              color="deep-orange-3"
              v-for="n in 3"
              :key="`xs-${n}`"
              style="min-width: 100px"
            >
              gg
            </q-chip>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestPage'
});
</script>

<style lang="scss" scoped>

</style>

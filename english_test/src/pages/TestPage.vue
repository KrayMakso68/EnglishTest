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
              v-for="item in items.filter()"
              :key="`xs-${n}`"
              style="min-width: 100px"
              @drop="onDrop($event, 1)"
            >
              gg
            </q-chip>
          </div>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="col-12"
             @drop="onDrop($event, 0)"
        >
          <q-chip
            size="15px"
            color="deep-orange-3"
            v-for="item in items.filter(x => x.categoryId === 0)"
            :key="`xs-${n}`"
            style="min-width: 100px"
            @dragstart="onDragStart($event, 1)"
          >
            {{ item.title }}
          </q-chip>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  name: 'TestPage',
  setup() {
    const items = ref([
      { id: 0, title: 'Item A', categoryId: 0 },
      { id: 1, title: 'Item B', categoryId: 0 },
      { id: 2, title: 'Item C', categoryId: 0 },
    ])
    const categories = ref([
      { id: 0, title: 'main'},
      { id: 1, title: 'block'}
    ])

    function onDragStart(e, item) {}
    function onDrop(e, categoryId) {}

    return {
      items,
      categories,
      onDragStart,
      onDrop
    }
  }
});
</script>

<style lang="scss" scoped>

</style>

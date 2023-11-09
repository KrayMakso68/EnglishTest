<template>
  <q-page class="row justify-center q-pt-lg">
    <!--    {{ $store.state.moduleTest.likes }}-->
    <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8">
      <div class="column justify-between"
           style="min-height: 70%;"
      >
        <div class="col">
          <div
          class="row justify-between text-center bg-light-green-2 shadow-2 no-wrap q-mb-xs"
          style="border-radius: 6px; padding-top: 2px"
          v-for="n in 1"
          :key="`row-${n}`"
        >
          <div class="col-4 q-mt-xs">
            <div class="text-h6 text-no-wrap q-mb-xs">измерять величину тока</div>
          </div>
          <div class="col-7">
            <div class="row q-gutter-xs no-wrap">    <!-- контейнеры dropable -->
              <div class="col bg-deep-orange-3 rowItemBox items-center"
                   v-for="n in [1,2,3]"
                   @drop="onDropSingle($event, n)"
                   @dragover.prevent
                   @dragenter.prevent
              >
                <q-chip
                  size="15px"
                  class="chipStyle "
                  color="deep-orange-3"
                  v-for="item in items.filter(x => x.categoryId === n)"
                  :key="item.id"
                  @dragstart="onDragStart($event, item)"
                  draggable="true"
                >
                  <div class="text-subtitle1 text-weight-bold q-mx-auto">
                    {{ item.title }}
                  </div>
                </q-chip>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div class="row q-mt-xl">
          <div class="col-12 bg-blue-1"
               style="min-height: 40px"
               @drop="onDrop($event, 0)"
               @dragover.prevent
               @dragenter.prevent
          >
            <q-chip
              square
              size="15px"
              class="chipStyle"
              color="deep-orange-3"
              v-for="item in items.filter(x => x.categoryId === 0)"
              :key="`xs-${n}`"
              @dragstart="onDragStart($event, item)"
              draggable="true"
            >
              <div class="text-subtitle1 text-weight-bold q-mx-auto">
                {{ item.title }}
              </div>
            </q-chip>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import {useStore} from "vuex";
export default defineComponent({
  name: 'TestPage',
  setup() {
    const $store = useStore();
    const items = ref($store.state.moduleTest.items)
    const categories = ref([
      { id: 0, title: 'main'},
      { id: 1, title: 'block'}
    ])

    function onDragStart(event, item) {
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData('itemId', item.id.toString())
    }
    function onDrop(event, categoryId) {
      const itemId = parseInt(event.dataTransfer.getData('itemId'))
      items.value = items.value.map(x => {
        if (x.id === itemId)
          x.categoryId = categoryId
        return x
      })
    }
    function onDropSingle(event, categoryId) {
      const itemId = parseInt(event.dataTransfer.getData('itemId'))
      let count = 0;
      items.value.forEach((item) => {
        if (item.categoryId === categoryId) {
          count++
        }
      })
      if (!count) {
        items.value = items.value.map(x => {
        if (x.id === itemId)
          x.categoryId = categoryId
        return x
      })
      }
    }

    return {
      items,
      categories,
      onDragStart,
      onDrop,
      onDropSingle
    }
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

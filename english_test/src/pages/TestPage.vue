<template>
  <q-page class="row items-start justify-center q-pt-lg">
    <!--    {{ $store.state.moduleTest.likes }}-->
    <div class="col-xs-12 col-sm-11 col-md-8">
      <div
        class="row justify-between text-center bg-light-green-2 shadow-1"
        style="border-radius: 6px; padding-top: 2px"
        v-for="n in 1"
        :key="`xxx-${n}`"
      >
        <div class="col-4">
          <div class="q-ma-none text-h6 text-no-wrap">измерять величину тока</div>
        </div>
        <div class="col-6">
          <div class="row q-gutter-xs">    <!-- контейнеры dropable -->
            <div class="col bg-deep-orange-3 rowItemBox items-center"
                 v-for="n in [1,2,3]"
                 @drop="onDrop($event, n)"
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
                <div class="q-mx-auto">
                  {{ item.title }}
                </div>
              </q-chip>
            </div>
          </div>
<!--            <q-chip-->
<!--              size="20px"-->
<!--              color="deep-orange-3"-->
<!--              v-for="x in 1"-->
<!--              :key="x"-->
<!--              style="min-width: 100px; max-height: 32px"-->
<!--            >-->
<!--              <div @drop="onDrop($event, 1)"-->
<!--                   style="min-width: 80px;"-->
<!--                   @dragover.prevent-->
<!--                   @dragenter.prevent-->
<!--              >-->
<!--                <q-chip-->
<!--                  size="15px"-->
<!--                  color="deep-orange-3"-->
<!--                  v-for="item in items.filter(x => x.categoryId === 1)"-->
<!--                  :key="item.id"-->
<!--                  style="min-width: 100px"-->
<!--                  @dragstart="onDragStart($event, item)"-->
<!--                  draggable="true"-->
<!--                >-->
<!--                  {{ item.title }}-->
<!--                </q-chip>-->
<!--              </div>-->
<!--            </q-chip>-->
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
            <div class="q-mx-auto">
              {{ item.title }}
            </div>
          </q-chip>
        </div>
<!--        <div class="col-12 bg-red-1"-->
<!--             style="min-height: 40px"-->
<!--             @drop="onDrop($event, 1)"-->
<!--             @dragover.prevent-->
<!--             @dragenter.prevent-->
<!--        >-->
<!--          <q-chip-->
<!--            size="15px"-->
<!--            color="deep-orange-3"-->
<!--            v-for="item in items.filter(x => x.categoryId === 1)"-->
<!--            :key="item.id"-->
<!--            style="min-width: 100px"-->
<!--            @dragstart="onDragStart($event, item)"-->
<!--            draggable="true"-->
<!--          >-->
<!--            {{ item.title }}-->
<!--          </q-chip>-->
<!--        </div>-->
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
      { id: 0, title: 'Item A', categoryId: 1 },
      { id: 1, title: 'Item B', categoryId: 0 },
      { id: 2, title: 'Item C', categoryId: 0 },
      { id: 3, title: 'Item D', categoryId: 1 },
      { id: 4, title: 'Item Effffffdddddd', categoryId: 0 },
      { id: 5, title: 'Item F', categoryId: 0 },
    ])
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
.rowItemBox {
  min-height: 40px;
  border-radius: 30px;
}
.chipStyle {
  margin-top: 5px;
  min-width: 100px;
}
</style>

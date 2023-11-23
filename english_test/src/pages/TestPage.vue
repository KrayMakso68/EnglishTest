<template>
  <q-page class="row justify-center q-pt-lg">
    <div class="col-xs-12 col-sm-11 col-md-10 col-lg-10">
      <div class="column justify-between"
           style="min-height: 70%;"
      >
        <div class="col">
          <div
          class="row justify-between text-center bg-light-green-2 shadow-2 no-wrap q-mb-xs"
          style="border-radius: 6px; padding-top: 2px"
          v-for="phrase in phrases"
          :key="`row-${phrase.number}`"
        >
          <div class="col-4 q-mt-xs">
            <div class="text-subtitle1 text-weight-medium q-mb-xs">{{ phrase.title }}</div>
          </div>
          <div class="col-7 self-center">
            <div class="row q-gutter-xs no-wrap">    <!-- контейнеры dropable -->
              <div class="col bg-deep-orange-3 rowItemBox items-center"
                   v-for="n in [1,2,3]"
                   @drop="onDropSingle($event, Number(`${phrase.number}`+String(n)), phrase.number, n)"
                   @dragover.prevent
                   @dragenter.prevent
              >
                <q-chip
                  size="15px"
                  class="chipStyle "
                  color="deep-orange-3"
                  v-for="word in words.filter(x => x.containerId === Number(`${phrase.number}`+String(n)) )"
                  :key="word.id"
                  @dragstart="onDragStart($event, word)"
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {computed, defineComponent} from 'vue'
import { ref } from 'vue'
import {mapState, useStore} from "vuex";
export default defineComponent({
  name: 'TestPage',
  setup() {
    const $store = useStore();
    $store.commit('testModule/setTestCount')
    $store.commit('testModule/setNowTestVariant')

    //  // пример как использовать геттер в виде computed свойста
    //const getAllItems = computed(() => $store.getters['testModule/getItems'])
    //
    // // пример как изменять состояние стора
    // const addItemToList = (item) => {
    //   $store.commit('testModule/addItem', item)
    // }
    //
    // // добавил вызов для теста
    // addItemToList({ id: 7, title: 'New Item 12312312', categoryId: 0 })


    const words = ref(computed(() => $store.getters['testModule/getWords']))
    const phrases = $store.getters["testModule/getPhrases"]
    // const categories = ref([
    //   { id: 0, title: 'main'},
    //   { id: 1, title: 'block'}
    // ])

    function onDragStart(event, word) {
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData('wordId', word.id.toString())
    }
    function onDrop(event, containerId) {
      const wordId = parseInt(event.dataTransfer.getData('wordId'))
      $store.commit('testModule/updateCatIDinWords', {wordId, containerId})
    }
    function onDropSingle(event, containerId, question, container) {
      const wordId = parseInt(event.dataTransfer.getData('wordId'))
      let count = 0;
      words.value.forEach((word) => {
        if (word.containerId === containerId) {
          count++
        }
      })
      if (!count) {
        $store.commit('testModule/updateCatIDinWords', {wordId, containerId})
        $store.commit('testModule/setAnswerNow', {containerId, question, container})
      }
    }

    return {
      words,
      phrases,
      // categories,
      onDragStart,
      onDrop,
      onDropSingle,
    }
  },
  computed: {

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

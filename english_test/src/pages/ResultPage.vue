<template>
  <q-page class="row flex flex-center justify-center">
    <div class="col-4">
      <div>
        <DoughnutChart :chartData="testData"/>
      </div>
    </div>
    <div class="col-5">
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-6 q-pt-md">
            <div class="text-h5 text-weight-bold q-mt-sm q-mb-xs">Результат:</div>
            <div class="text-h2 text-weight-bold text-green q-pt-lg">
              88%
            </div>
          </q-card-section>

          <q-card-section class="col-6 flex flex-center q-pa-none">
            <q-img
                class="rounded-borders card-img"
                src="src/assets/results.svg"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn to="/" class="text-weight-bold full-width" color="indigo-6" icon="home" label="На главную" />
        </q-card-actions>
      </q-card>
    </div>



  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
import {useStore} from "vuex";

Chart.register(...registerables);
export default defineComponent({
  name: 'ResultPage',
  components: { DoughnutChart },

  setup() {
    const $store = useStore();
    $store.commit('testModule/setResult')

    const testData = {
      labels: ['Верно', 'Неверно'],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ['#0079AF', '#97B0C4'],
        },
      ],
    };

    return { testData };
  },
})
</script>

<style lang="scss" scoped>

</style>

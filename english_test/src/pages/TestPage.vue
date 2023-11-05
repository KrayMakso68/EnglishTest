<template>
  <q-page class="flex flex-center">
    {{ $store.state.ex.likes }}
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

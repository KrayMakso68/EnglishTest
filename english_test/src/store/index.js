import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import moduleTest from "src/store/test-questions"

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      moduleTest
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})

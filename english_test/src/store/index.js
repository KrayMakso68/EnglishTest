import {store} from 'quasar/wrappers'
import {createStore} from 'vuex'
import testModule from "src/store/test-module"

export default store(function (/* { ssrContext } */) {
  return createStore({
    modules: {
      testModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
})

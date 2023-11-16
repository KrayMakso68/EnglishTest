const testModule = {
  state: () => ({
    words: [
       { id: 0, title: 'Item A', categoryId: 1 },
       { id: 1, title: 'Item B', categoryId: 0 },
       { id: 2, title: 'Item C', categoryId: 0 },
       { id: 3, title: 'Item D', categoryId: 0 },
       { id: 4, title: 'semiconductor', categoryId: 0 },
       { id: 5, title: 'Item F', categoryId: 0 },
       { id: 6, title: 'Item A', categoryId: 0 },
       { id: 7, title: 'Item B', categoryId: 0 },
       { id: 8, title: 'Item C', categoryId: 0 },
       { id: 9, title: 'Item D', categoryId: 0 },
    ],
    testCount: null,
    testNow: {},
    testVariants: [
      {
        words: [
          { id: 0, title: 'Item A', containerId: 0 },
          { id: 1, title: 'Item B', containerId: 0 },
          { id: 2, title: 'Item C', containerId: 0 },
          { id: 3, title: 'Item D', containerId: 0 },
          { id: 4, title: 'semiconductor', containerId: 0 },
          { id: 5, title: 'Item F', containerId: 0 },
          { id: 6, title: 'Item A', containerId: 0 },
          { id: 7, title: 'Item B', containerId: 0 },
          { id: 8, title: 'Item C', containerId: 0 },
          { id: 9, title: 'Item D', containerId: 0 },
        ],
        answers: [
          { question: 1, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 2, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 3, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 4, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 5, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 6, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 7, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 8, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 9, answers: { cont1: 1, cont2: 2, cont: 3 } },
          { question: 10, answers: { cont1: 1, cont2: 2, cont: 3 } }
        ]
      },

    ],
  }),
  mutations: {
    // addItem(state, item) {
    //   state.items.push(item)
    // },
    updateCatIDinWords(state, data) {
      state.words = [...state.words].map(x => {
        if (x.id === data.wordId)
          x.categoryId = data.categoryId
        return x
      })
    },
    setTestCount(state) {
      state.testCount = state.testVariants.length
    },
    setNowTestVariant(state) {
      state.testNow = state.testVariants[Math.floor(Math.random() * state.testCount)]
    }
  },
  getters: {
    getWords(state) {
      return state.words
    }
  },
  actions: {

  },

  namespaced: true
}

export default testModule;

const testModule = {
  state: () => ({
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
        phrases: [
          {number: 1, title: 'измерять величину тока'},
          {number: 2, title: 'быть следствием повреждения кабеля'},
          {number: 3, title: 'осуществлять легирование вещества'},
          {number: 4, title: 'применить свойство проводника'},
          {number: 5, title: 'изменять заряд положительно заряженной частицы'},
          {number: 6, title: 'распределять примесь диэлектрика'},
          {number: 7, title: 'вызывать движение отрицательно заряженной частицы'},
          {number: 8, title: 'сохранять удельную проводимость полупроводника'},
          {number: 9, title: 'уменьшать потерю тепла'},
          {number: 10, title: 'увеличивать напряжение в цепи'},
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
    updateCatIDinWords(state, data) {
      state.testNow.words = [...state.testNow.words].map(x => {
        if (x.id === data.wordId)
          x.containerId = data.containerId
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
      return state.testNow.words
    },
    getPhrases(state) {
      return state.testNow.phrases
    }
  },
  actions: {

  },

  namespaced: true
}

export default testModule;

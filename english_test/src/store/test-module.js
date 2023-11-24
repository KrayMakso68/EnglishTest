const testModule = {
  state: () => ({
    answersNow: [
      { question: 1, answers: [null, null, null] },
      { question: 2, answers: [null, null, null] },
      { question: 3, answers: [null, null, null] },
      { question: 4, answers: [null, null, null] },
      { question: 5, answers: [null, null, null] },
      { question: 6, answers: [null, null, null] },
      { question: 7, answers: [null, null, null] },
      { question: 8, answers: [null, null, null] },
      { question: 9, answers: [null, null, null] },
      { question: 10, answers: [null, null, null] }
    ],
    testCount: null,
    testNow: {},
    testVariants: [
      {
        words: [
          { id: 0, title: 'to increase', containerId: 0 },
          { id: 1, title: 'to employ', containerId: 0 },
          { id: 2, title: 'substance', containerId: 0 },
          { id: 3, title: 'loss', containerId: 0 },
          { id: 4, title: 'to decrease', containerId: 0 },
          { id: 5, title: 'conductivity', containerId: 0 },
          { id: 6, title: 'wire', containerId: 0 },
          { id: 7, title: 'to store', containerId: 0 },
          { id: 8, title: 'current', containerId: 0 },
          { id: 9, title: 'heat', containerId: 0 },
          { id: 10, title: 'movement', containerId: 0 },
          { id: 11, title: 'insulator', containerId: 0 },
          { id: 12, title: 'conductor', containerId: 0 },
          { id: 13, title: 'to carry out', containerId: 0 },
          { id: 14, title: 'magnitude', containerId: 0 },
          { id: 15, title: 'circuit', containerId: 0 },
          { id: 16, title: 'to change', containerId: 0 },
          { id: 17, title: 'semiconductor', containerId: 0 },
          { id: 18, title: 'to measure', containerId: 0 },
          { id: 19, title: 'charge', containerId: 0 },
          { id: 20, title: 'proton', containerId: 0 },
          { id: 21, title: 'doping', containerId: 0 },
          { id: 22, title: 'to distribute', containerId: 0 },
          { id: 23, title: 'fault', containerId: 0 },
          { id: 24, title: 'electron', containerId: 0 },
          { id: 25, title: 'to cause', containerId: 0 },
          { id: 26, title: 'impurity', containerId: 0 },
          { id: 27, title: 'voltage', containerId: 0 },
          { id: 28, title: 'property', containerId: 0 },
          { id: 29, title: 'to result from', containerId: 0 },
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
        rightAnswers: [
          { question: 1, answers: { cont1: 18, cont2: 8, cont: 14 } },
          { question: 2, answers: { cont1: 29, cont2: 6, cont: 23 } },
          { question: 3, answers: { cont1: 13, cont2: 2, cont: 21 } },
          { question: 4, answers: { cont1: 1, cont2: 12, cont: 28 } },
          { question: 5, answers: { cont1: 16, cont2: 20, cont: 19 } },
          { question: 6, answers: { cont1: 22, cont2: 11, cont: 26 } },
          { question: 7, answers: { cont1: 25, cont2: 24, cont: 10 } },
          { question: 8, answers: { cont1: 7, cont2: 17, cont: 5 } },
          { question: 9, answers: { cont1: 4, cont2: 9, cont: 3 } },
          { question: 10, answers: { cont1: 0, cont2: 15, cont: 27 } }
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
    },
    setAnswerNow(state, data) {
      state.answersNow[data.question - 1].answers[data.container - 1] = data.wordId
    },
    // setAnswerInNull(state, data) {
    //   state.answersNow[data.question - 1].answers[data.container - 1] = null
    // }
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

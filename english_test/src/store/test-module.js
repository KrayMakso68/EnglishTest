const testModule = {
  state: () => ({
    isTest: false,
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
    result: {
      true: null,
      false: null,
      percents: null,
      answersCheck: [
        { question: 1, true: false, answers: [null, null, null] },
        { question: 2, true: false, answers: [null, null, null] },
        { question: 3, true: false, answers: [null, null, null] },
        { question: 4, true: false, answers: [null, null, null] },
        { question: 5, true: false, answers: [null, null, null] },
        { question: 6, true: false, answers: [null, null, null] },
        { question: 7, true: false, answers: [null, null, null] },
        { question: 8, true: false, answers: [null, null, null] },
        { question: 9, true: false, answers: [null, null, null] },
        { question: 10, true: false, answers: [null, null, null] }
      ],
    },
    testNow: {},
    testCount: null,
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
          {question: 1, answers: [18, 8, 14]},
          {question: 2, answers: [29, 6, 23]},
          {question: 3, answers: [13, 2, 21]},
          {question: 4, answers: [1, 12, 28]},
          {question: 5, answers: [16, 20, 19]},
          {question: 6, answers: [22, 11, 26]},
          {question: 7, answers: [25, 24, 10]},
          {question: 8, answers: [7, 17, 5]},
          {question: 9, answers: [4, 9, 3]},
          {question: 10, answers: [0, 15, 27]}
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
    setAnswerInNull(state, data) {
      state.answersNow[data.question - 1].answers[data.container - 1] = null
    },
    setIsTestFlag(state) {
      state.isTest = true
    },
    setResult(state) {
      let trueCount = 0
      state.answersNow.forEach((question, num) => {
        let count = 0
        question.answers.forEach((el, i) => {
          const rightAns = state.testNow.rightAnswers //!!!!
          console.log(rightAns)
          if (el === rightAns) {
            state.result.answersCheck[num].answers[i] = true
            count++
          }
          else
            state.result.answersCheck[num].answers[i] = false
        })
        if (count === 3) {
          state.result.answersCheck[num].true = true
          trueCount++
        }
      })
      state.result.true = trueCount
      state.result.false = 10 - trueCount
      state.result.percents = Math.round(100 / 10 * trueCount)
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

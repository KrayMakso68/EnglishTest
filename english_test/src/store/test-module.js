import _ from 'lodash'

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
      {
        words: [
          { id: 0, title: 'to break', containerId: 0 },
          { id: 1, title: 'circuit', containerId: 0 },
          { id: 2, title: 'difference', containerId: 0 },
          { id: 3, title: 'semiconductor', containerId: 0 },
          { id: 4, title: 'current', containerId: 0 },
          { id: 5, title: 'to result in', containerId: 0 },
          { id: 6, title: 'introduction', containerId: 0 },
          { id: 7, title: 'particle', containerId: 0 },
          { id: 8, title: 'electron', containerId: 0 },
          { id: 9, title: 'fault', containerId: 0 },
          { id: 10, title: 'voltage', containerId: 0 },
          { id: 11, title: 'charge', containerId: 0 },
          { id: 12, title: 'to influence', containerId: 0 },
          { id: 13, title: 'property', containerId: 0 },
          { id: 14, title: 'wire', containerId: 0 },
          { id: 15, title: 'potential', containerId: 0 },
          { id: 16, title: 'to control', containerId: 0 },
          { id: 17, title: 'to employ', containerId: 0 },
          { id: 18, title: 'to depend on', containerId: 0 },
          { id: 19, title: 'to decrease', containerId: 0 },
          { id: 20, title: 'to result from', containerId: 0 },
          { id: 21, title: 'motion', containerId: 0 },
          { id: 22, title: 'impurity', containerId: 0 },
          { id: 23, title: 'to define', containerId: 0 },
          { id: 24, title: 'series', containerId: 0 },
          { id: 25, title: 'resistivity', containerId: 0 },
          { id: 26, title: 'substance', containerId: 0 },
          { id: 27, title: 'to change', containerId: 0 },
          { id: 28, title: 'flow', containerId: 0 },
          { id: 29, title: 'drop', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'понижать удельное сопротивление полупроводника'},
          {number: 2, title: 'изменить разность потенциалов'},
          {number: 3, title: 'оказывать влияние на поток тока'},
          {number: 4, title: 'использовать свойство вещества'},
          {number: 5, title: 'разрывать последовательное соединение'},
          {number: 6, title: 'зависеть от внесения примеси'},
          {number: 7, title: 'управлять движением электронов'},
          {number: 8, title: 'приводить к падению напряжения'},
          {number: 9, title: 'определять заряд частицы'},
          {number: 10, title: 'быть следствием повреждения кабеля'},
        ],
        rightAnswers: [
          {question: 1, answers: [19, 3, 25]},
          {question: 2, answers: [27, 15, 2]},
          {question: 3, answers: [12, 4, 28]},
          {question: 4, answers: [17, 26, 13]},
          {question: 5, answers: [0, 24, 1]},
          {question: 6, answers: [18, 22, 6]},
          {question: 7, answers: [16, 8, 21]},
          {question: 8, answers: [5, 10, 29]},
          {question: 9, answers: [23, 7, 11]},
          {question: 10, answers: [20, 14, 9]}
        ]
      },
      {
        words: [
          { id: 0, title: 'to overlap', containerId: 0 },
          { id: 1, title: 'technique', containerId: 0 },
          { id: 2, title: 'charge', containerId: 0 },
          { id: 3, title: 'to generate', containerId: 0 },
          { id: 4, title: 'property', containerId: 0 },
          { id: 5, title: 'to add', containerId: 0 },
          { id: 6, title: 'measuring', containerId: 0 },
          { id: 7, title: 'to alter', containerId: 0 },
          { id: 8, title: 'doping', containerId: 0 },
          { id: 9, title: 'logic', containerId: 0 },
          { id: 10, title: 'semiconductor', containerId: 0 },
          { id: 11, title: 'gate', containerId: 0 },
          { id: 12, title: 'chip', containerId: 0 },
          { id: 13, title: 'to block', containerId: 0 },
          { id: 14, title: 'to apply', containerId: 0 },
          { id: 15, title: 'band', containerId: 0 },
          { id: 16, title: 'insulator', containerId: 0 },
          { id: 17, title: 'current', containerId: 0 },
          { id: 18, title: 'reverse', containerId: 0 },
          { id: 19, title: 'to control', containerId: 0 },
          { id: 20, title: 'instrument', containerId: 0 },
          { id: 21, title: 'to decrease', containerId: 0 },
          { id: 22, title: 'to consider', containerId: 0 },
          { id: 23, title: 'carrier', containerId: 0 },
          { id: 24, title: 'to improve', containerId: 0 },
          { id: 25, title: 'amplifier', containerId: 0 },
          { id: 26, title: 'conductivity', containerId: 0 },
          { id: 27, title: 'biased', containerId: 0 },
          { id: 28, title: 'alternating', containerId: 0 },
          { id: 29, title: 'conduction', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'управлять электропроводностью полупроводника'},
          {number: 2, title: 'рассматривать логический затвор'},
          {number: 3, title: 'частично покрывать зону проводимости'},
          {number: 4, title: 'вырабатывать  переменный ток'},
          {number: 5, title: 'применять измерительный прибор'},
          {number: 6, title: 'улучшить метод легирования'},
          {number: 7, title: 'уменьшить напряжение обратного смещения'},
          {number: 8, title: 'задерживать несущую заряда'},
          {number: 9, title: 'добавить микросхему усилителя'},
          {number: 10, title: 'изменить характеристику диэлектрика'},
        ],
        rightAnswers: [
          {question: 1, answers: [19, 10, 26]},
          {question: 2, answers: [22, 9, 11]},
          {question: 3, answers: [0, 29, 15]},
          {question: 4, answers: [3, 28, 17]},
          {question: 5, answers: [14, 6, 20]},
          {question: 6, answers: [24, 8, 1]},
          {question: 7, answers: [21, 18, 27]},
          {question: 8, answers: [13, 2, 23]},
          {question: 9, answers: [5, 25, 12]},
          {question: 10, answers: [7, 16, 4]}
        ]
      },
      {
        words: [
          { id: 0, title: 'charge', containerId: 0 },
          { id: 1, title: 'to decrease', containerId: 0 },
          { id: 2, title: 'source', containerId: 0 },
          { id: 3, title: 'gap', containerId: 0 },
          { id: 4, title: 'to break', containerId: 0 },
          { id: 5, title: 'semiconductor', containerId: 0 },
          { id: 6, title: 'property', containerId: 0 },
          { id: 7, title: 'insulator', containerId: 0 },
          { id: 8, title: 'biased', containerId: 0 },
          { id: 9, title: 'direct', containerId: 0 },
          { id: 10, title: 'to switch', containerId: 0 },
          { id: 11, title: 'flow', containerId: 0 },
          { id: 12, title: 'motion', containerId: 0 },
          { id: 13, title: 'to consider', containerId: 0 },
          { id: 14, title: 'current', containerId: 0 },
          { id: 15, title: 'to add', containerId: 0 },
          { id: 16, title: 'to close', containerId: 0 },
          { id: 17, title: 'series', containerId: 0 },
          { id: 18, title: 'energy', containerId: 0 },
          { id: 19, title: 'path', containerId: 0 },
          { id: 20, title: 'to measure', containerId: 0 },
          { id: 21, title: 'conductivity', containerId: 0 },
          { id: 22, title: 'circuit', containerId: 0 },
          { id: 23, title: 'impurity', containerId: 0 },
          { id: 24, title: 'to enhance', containerId: 0 },
          { id: 25, title: 'to apply', containerId: 0 },
          { id: 26, title: 'power', containerId: 0 },
          { id: 27, title: 'doping', containerId: 0 },
          { id: 28, title: 'forward', containerId: 0 },
          { id: 29, title: 'to alter', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'размыкать последовательную цепь'},
          {number: 2, title: 'измерять постоянный ток'},
          {number: 3, title: 'переключать источник энергии'},
          {number: 4, title: 'изменять движение заряда'},
          {number: 5, title: 'замыкать путь потока'},
          {number: 6, title: 'увеличить энергетический зазор'},
          {number: 7, title: 'добавить легирующую примесь'},
          {number: 8, title: 'понизить напряжение прямого смещения'},
          {number: 9, title: 'рассматривать удельную проводимость полупроводника'},
          {number: 10, title: 'использовать свойство диэлектрика'},
        ],
        rightAnswers: [
          {question: 1, answers: [4, 17, 22]},
          {question: 2, answers: [20, 9, 14]},
          {question: 3, answers: [10, 26, 2]},
          {question: 4, answers: [29, 0, 12]},
          {question: 5, answers: [16, 11, 19]},
          {question: 6, answers: [24, 18, 3]},
          {question: 7, answers: [15, 27, 23]},
          {question: 8, answers: [1, 28, 8]},
          {question: 9, answers: [13, 5, 21]},
          {question: 10, answers: [25, 7, 6]}
        ]
      },
      {
        words: [
          { id: 0, title: 'circuit', containerId: 0 },
          { id: 1, title: 'to keep', containerId: 0 },
          { id: 2, title: 'emission', containerId: 0 },
          { id: 3, title: 'valve', containerId: 0 },
          { id: 4, title: 'to determine', containerId: 0 },
          { id: 5, title: 'flow', containerId: 0 },
          { id: 6, title: 'semiconductor', containerId: 0 },
          { id: 7, title: 'electrons', containerId: 0 },
          { id: 8, title: 'to invent', containerId: 0 },
          { id: 9, title: 'development', containerId: 0 },
          { id: 10, title: 'to amplify', containerId: 0 },
          { id: 11, title: 'direction', containerId: 0 },
          { id: 12, title: 'number', containerId: 0 },
          { id: 13, title: 'direct', containerId: 0 },
          { id: 14, title: 'to depend on', containerId: 0 },
          { id: 15, title: 'ions', containerId: 0 },
          { id: 16, title: 'to store', containerId: 0 },
          { id: 17, title: 'capacitance', containerId: 0 },
          { id: 18, title: 'to increase', containerId: 0 },
          { id: 19, title: 'two-element', containerId: 0 },
          { id: 20, title: 'charge', containerId: 0 },
          { id: 21, title: 'induction', containerId: 0 },
          { id: 22, title: 'potential', containerId: 0 },
          { id: 23, title: 'particles', containerId: 0 },
          { id: 24, title: 'to decrease', containerId: 0 },
          { id: 25, title: 'to redistribute', containerId: 0 },
          { id: 26, title: 'current', containerId: 0 },
          { id: 27, title: 'plates', containerId: 0 },
          { id: 28, title: 'to change', containerId: 0 },
          { id: 29, title: 'voltage', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'усиливать постоянный ток'},
          {number: 2, title: 'уменьшать напряжение в цепи'},
          {number: 3, title: 'накапливать заряд ионов'},
          {number: 4, title: 'изобретать двухэлементную лампу'},
          {number: 5, title: 'изменять направление индукции'},
          {number: 6, title: 'перераспределять поток частиц'},
          {number: 7, title: 'поддерживать потенциал емкости'},
          {number: 8, title: 'увеличивать эмиссию электронов'},
          {number: 9, title: 'зависеть от количества пластин'},
          {number: 10, title: 'определять развитие полупроводникa'},
        ],
        rightAnswers: [
          {question: 1, answers: [10, 13, 26]},
          {question: 2, answers: [24, 0, 29]},
          {question: 3, answers: [16, 15, 20]},
          {question: 4, answers: [8, 19, 3]},
          {question: 5, answers: [28, 21, 11]},
          {question: 6, answers: [25, 23, 5]},
          {question: 7, answers: [1, 17, 22]},
          {question: 8, answers: [18, 7, 2]},
          {question: 9, answers: [14, 27, 12]},
          {question: 10, answers: [4, 6, 9]}
        ]
      },
      {
        words: [
          { id: 0, title: 'consumption', containerId: 0 },
          { id: 1, title: 'series', containerId: 0 },
          { id: 2, title: 'to support', containerId: 0 },
          { id: 3, title: 'valves', containerId: 0 },
          { id: 4, title: 'to decrease', containerId: 0 },
          { id: 5, title: 'capacitor', containerId: 0 },
          { id: 6, title: 'cell', containerId: 0 },
          { id: 7, title: 'diode', containerId: 0 },
          { id: 8, title: 'to generate', containerId: 0 },
          { id: 9, title: 'magnitude', containerId: 0 },
          { id: 10, title: 'direct', containerId: 0 },
          { id: 11, title: 'circuit', containerId: 0 },
          { id: 12, title: 'to increase', containerId: 0 },
          { id: 13, title: 'to charge', containerId: 0 },
          { id: 14, title: 'to change', containerId: 0 },
          { id: 15, title: 'to find', containerId: 0 },
          { id: 16, title: 'to break', containerId: 0 },
          { id: 17, title: 'potential', containerId: 0 },
          { id: 18, title: 'voltage', containerId: 0 },
          { id: 19, title: 'to insulate', containerId: 0 },
          { id: 20, title: 'to depend on', containerId: 0 },
          { id: 21, title: 'number', containerId: 0 },
          { id: 22, title: 'difference', containerId: 0 },
          { id: 23, title: 'connection', containerId: 0 },
          { id: 24, title: 'power', containerId: 0 },
          { id: 25, title: 'application', containerId: 0 },
          { id: 26, title: 'current', containerId: 0 },
          { id: 27, title: 'plate', containerId: 0 },
          { id: 28, title: 'field', containerId: 0 },
          { id: 29, title: 'terminal', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'изменять потребление энергии'},
          {number: 2, title: 'изолировать клемму питания'},
          {number: 3, title: 'зависеть от количества ламп'},
          {number: 4, title: 'увеличить величину поля'},
          {number: 5, title: 'заряжать обкладку конденсатора'},
          {number: 6, title: 'вырабатывать постоянный ток'},
          {number: 7, title: 'поддерживать разность потенциала'},
          {number: 8, title: 'найти применение диода'},
          {number: 9, title: 'разрывать последовательное соединение'},
          {number: 10, title: 'уменьшать напряжение в цепи'},
        ],
        rightAnswers: [
          {question: 1, answers: [14, 24, 0]},
          {question: 2, answers: [19, 29, 6]},
          {question: 3, answers: [20, 3, 21]},
          {question: 4, answers: [12, 28, 9]},
          {question: 5, answers: [13, 5, 27]},
          {question: 6, answers: [8, 10, 26]},
          {question: 7, answers: [2, 17, 22]},
          {question: 8, answers: [15, 7, 25]},
          {question: 9, answers: [16, 1, 23]},
          {question: 10, answers: [4, 18, 11]}
        ]
      },
      {
        words: [
          { id: 0, title: 'to require', containerId: 0 },
          { id: 1, title: 'parallel', containerId: 0 },
          { id: 2, title: 'to exhibit', containerId: 0 },
          { id: 3, title: 'direct', containerId: 0 },
          { id: 4, title: 'to decrease', containerId: 0 },
          { id: 5, title: 'signal', containerId: 0 },
          { id: 6, title: 'field', containerId: 0 },
          { id: 7, title: 'to store', containerId: 0 },
          { id: 8, title: 'rectifier', containerId: 0 },
          { id: 9, title: 'to imrove', containerId: 0 },
          { id: 10, title: 'to amplify', containerId: 0 },
          { id: 11, title: 'ions', containerId: 0 },
          { id: 12, title: 'to embrace', containerId: 0 },
          { id: 13, title: 'frequency', containerId: 0 },
          { id: 14, title: 'gain', containerId: 0 },
          { id: 15, title: 'certain', containerId: 0 },
          { id: 16, title: 'to produce', containerId: 0 },
          { id: 17, title: 'connection', containerId: 0 },
          { id: 18, title: 'voltage', containerId: 0 },
          { id: 19, title: 'design', containerId: 0 },
          { id: 20, title: 'device', containerId: 0 },
          { id: 21, title: 'to mount', containerId: 0 },
          { id: 22, title: 'current', containerId: 0 },
          { id: 23, title: 'diode', containerId: 0 },
          { id: 24, title: 'drop', containerId: 0 },
          { id: 25, title: 'to break', containerId: 0 },
          { id: 26, title: 'range', containerId: 0 },
          { id: 27, title: 'charge', containerId: 0 },
          { id: 28, title: 'science', containerId: 0 },
          { id: 29, title: 'rate', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'усиливать постоянный ток'},
          {number: 2, title: 'требовать определенной скорости'},
          {number: 3, title: 'создавать усиление cигнала'},
          {number: 4, title: 'совершенствовать конструкцию устройства'},
          {number: 5, title: 'разрывать параллельное соединение'},
          {number: 6, title: 'охватывать область науки'},
          {number: 7, title: 'монтировать выпрямительный диод'},
          {number: 8, title: 'демонстрировать падение напряжения'},
          {number: 9, title: 'накапливать заряд ионов'},
          {number: 10, title: 'уменьшать частотный диапазон'},
        ],
        rightAnswers: [
          {question: 1, answers: [10, 3, 22]},
          {question: 2, answers: [0, 15, 29]},
          {question: 3, answers: [16, 5, 14]},
          {question: 4, answers: [9, 20, 19]},
          {question: 5, answers: [25, 1, 17]},
          {question: 6, answers: [12, 28, 6]},
          {question: 7, answers: [21, 8, 23]},
          {question: 8, answers: [2, 18, 24]},
          {question: 9, answers: [7, 27, 11]},
          {question: 10, answers: [4, 13, 26]}
        ]
      },
      {
        words: [
          { id: 0, title: 'additional', containerId: 0 },
          { id: 1, title: 'external', containerId: 0 },
          { id: 2, title: 'direction', containerId: 0 },
          { id: 3, title: 'silicon', containerId: 0 },
          { id: 4, title: 'difference', containerId: 0 },
          { id: 5, title: 'to influence', containerId: 0 },
          { id: 6, title: 'plates', containerId: 0 },
          { id: 7, title: 'potential', containerId: 0 },
          { id: 8, title: 'to introduce', containerId: 0 },
          { id: 9, title: 'to fabricate', containerId: 0 },
          { id: 10, title: 'to use', containerId: 0 },
          { id: 11, title: 'substance', containerId: 0 },
          { id: 12, title: 'to increase', containerId: 0 },
          { id: 13, title: 'reliable', containerId: 0 },
          { id: 14, title: 'to decrease', containerId: 0 },
          { id: 15, title: 'valuable', containerId: 0 },
          { id: 16, title: 'to measure', containerId: 0 },
          { id: 17, title: 'property', containerId: 0 },
          { id: 18, title: 'to change', containerId: 0 },
          { id: 19, title: 'impurities', containerId: 0 },
          { id: 20, title: 'device', containerId: 0 },
          { id: 21, title: 'different', containerId: 0 },
          { id: 22, title: 'to comprise', containerId: 0 },
          { id: 23, title: 'pressure', containerId: 0 },
          { id: 24, title: 'to determine', containerId: 0 },
          { id: 25, title: 'induction', containerId: 0 },
          { id: 26, title: 'number', containerId: 0 },
          { id: 27, title: 'grid', containerId: 0 },
          { id: 28, title: 'part', containerId: 0 },
          { id: 29, title: 'conductivity', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'влиять на проводимость вещества'},
          {number: 2, title: 'включать в себя различные примеси'},
          {number: 3, title: 'ввести дополнительную сетку'},
          {number: 4, title: 'производить надежный прибор'},
          {number: 5, title: 'изменять направление индукции'},
          {number: 6, title: 'измерить разницу потенциалов'},
          {number: 7, title: 'уменьшать внешнее давление'},
          {number: 8, title: 'использовать кремниевую часть'},
          {number: 9, title: 'увеличивать количество пластин'},
          {number: 10, title: 'определить ценное свойство'},
        ],
        rightAnswers: [
          {question: 1, answers: [5, 11, 29]},
          {question: 2, answers: [22, 21, 19]},
          {question: 3, answers: [8, 0, 27]},
          {question: 4, answers: [9, 13, 20]},
          {question: 5, answers: [18, 25, 2]},
          {question: 6, answers: [16, 7, 4]},
          {question: 7, answers: [14, 1, 23]},
          {question: 8, answers: [10, 3, 28]},
          {question: 9, answers: [12, 26, 6]},
          {question: 10, answers: [24, 15, 17]}
        ]
      },
      {
        words: [
          { id: 0, title: 'capacitance', containerId: 0 },
          { id: 1, title: 'series', containerId: 0 },
          { id: 2, title: 'difference', containerId: 0 },
          { id: 3, title: 'to posses', containerId: 0 },
          { id: 4, title: 'direct', containerId: 0 },
          { id: 5, title: 'diodes', containerId: 0 },
          { id: 6, title: 'frequency', containerId: 0 },
          { id: 7, title: 'terminal', containerId: 0 },
          { id: 8, title: 'external', containerId: 0 },
          { id: 9, title: 'to store', containerId: 0 },
          { id: 10, title: 'certain', containerId: 0 },
          { id: 11, title: 'to find', containerId: 0 },
          { id: 12, title: 'to decrease', containerId: 0 },
          { id: 13, title: 'to support', containerId: 0 },
          { id: 14, title: 'pressure', containerId: 0 },
          { id: 15, title: 'to break', containerId: 0 },
          { id: 16, title: 'charge', containerId: 0 },
          { id: 17, title: 'ions', containerId: 0 },
          { id: 18, title: 'to increase', containerId: 0 },
          { id: 19, title: 'current', containerId: 0 },
          { id: 20, title: 'to insulate', containerId: 0 },
          { id: 21, title: 'application', containerId: 0 },
          { id: 22, title: 'to generate', containerId: 0 },
          { id: 23, title: 'advantage', containerId: 0 },
          { id: 24, title: 'to determine', containerId: 0 },
          { id: 25, title: 'charge', containerId: 0 },
          { id: 26, title: 'connection', containerId: 0 },
          { id: 27, title: 'cell', containerId: 0 },
          { id: 28, title: 'range', containerId: 0 },
          { id: 29, title: 'potential', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: 'обладать определенным преимуществом'},
          {number: 2, title: 'изолировать клемму питания'},
          {number: 3, title: 'поддерживать заряд емкости'},
          {number: 4, title: 'накапливать заряд ионов'},
          {number: 5, title: 'найти применение диодов'},
          {number: 6, title: 'разрывать последовательное соединение'},
          {number: 7, title: 'вырабатывать постоянный ток'},
          {number: 8, title: 'определять разность потенциалов'},
          {number: 9, title: 'уменьшать внешнее давление'},
          {number: 10, title: 'увеличить частотный диапазон'},
        ],
        rightAnswers: [
          {question: 1, answers: [3, 10, 23]},
          {question: 2, answers: [20, 27, 7]},
          {question: 3, answers: [13, 0, 16]},
          {question: 4, answers: [9, 17, 25]},
          {question: 5, answers: [11, 5, 21]},
          {question: 6, answers: [15, 1, 26]},
          {question: 7, answers: [22, 4, 19]},
          {question: 8, answers: [24, 29, 2]},
          {question: 9, answers: [12, 8, 14]},
          {question: 10, answers: [18, 6, 28]}
        ]
      }
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
      state.testNow = _.cloneDeep(state.testVariants[Math.floor(Math.random() * state.testCount)])
    },
    setAnswerNow(state, data) {
      state.answersNow.at(data.question - 1).answers[data.container - 1] = data.wordId
    },
    setAnswerInNull(state, data) {
      state.answersNow.at(data.question - 1).answers[data.container - 1] = null
    },
    setIsTestFlag(state) {
      state.isTest = true
    },
    setResult(state) {
      let trueCount = 0
      state.answersNow.forEach((question, num) => {
        let count = 0
        question.answers.forEach((el, i) => {
          const rightAns = state.testNow?.rightAnswers[num]?.answers[i]
          if (el === rightAns) {
            state.result.answersCheck.at(num).answers[i] = true
            count++
          }
          else
            state.result.answersCheck.at(num).answers[i] = false
        })
        if (count === 3) {
          state.result.answersCheck[num].true = true
          trueCount++
        }
      })
      state.result.true = trueCount
      state.result.false = 10 - trueCount
      state.result.percents = Math.round(100 / 10 * trueCount)
    },
    resetTest(state) {
      state.isTest = false
      state.testNow = {}
      state.answersNow = [
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
      ]
      state.result = {
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
      }
    }


  },
  getters: {
    getWords(state) {
      return state.testNow.words
    },
    getPhrases(state) {
      return state.testNow.phrases
    },
    getFalseQuestionsWithRightAnswers(state) {
      let FalseQuestions = []
      state.result.answersCheck.forEach(str => {
        if(str.true === false) {
          let question = {}
          question.phrase = state.testNow.phrases[str.question - 1].title
          question.nowAnswers = state.answersNow[str.question - 1].answers
          question.rightAnswers = state.testNow.rightAnswers[str.question - 1].answers
          FalseQuestions.push(question)
        }
      })
      return FalseQuestions
    },
    getResultTrue(state) {
      return state.result.true
    },
    getResultFalse(state) {
      return state.result.false
    },
    getResultPercents(state) {
      return state.result.percents
    },
    getIsTestFlag(state) {
      return state.isTest
    },
  },
  actions: {

  },

  namespaced: true
}

export default testModule;

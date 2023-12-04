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
          {question: 1, answers: [20, 4, 26]},
          {question: 2, answers: [28, 16, 3]},
          {question: 3, answers: [13, 5, 29]},
          {question: 4, answers: [18, 27, 14]},
          {question: 5, answers: [1, 25, 2]},
          {question: 6, answers: [19, 23, 7]},
          {question: 7, answers: [17, 9, 22]},
          {question: 8, answers: [6, 11, 30]},
          {question: 9, answers: [24, 8, 12]},
          {question: 10, answers: [21, 15, 10]}
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
          {question: 1, answers: [20, 11, 27]},
          {question: 2, answers: [23, 10, 12]},
          {question: 3, answers: [1, 30, 16]},
          {question: 4, answers: [4, 29, 18]},
          {question: 5, answers: [15, 7, 21]},
          {question: 6, answers: [25, 9, 2]},
          {question: 7, answers: [22, 19, 28]},
          {question: 8, answers: [14, 3, 24]},
          {question: 9, answers: [6, 26, 13]},
          {question: 10, answers: [8, 17, 5]}
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
          {question: 1, answers: [5, 18, 23]},
          {question: 2, answers: [21, 10, 15]},
          {question: 3, answers: [11, 27, 3]},
          {question: 4, answers: [30, 1, 13]},
          {question: 5, answers: [17, 12, 20]},
          {question: 6, answers: [25, 19, 4]},
          {question: 7, answers: [16, 28, 24]},
          {question: 8, answers: [2, 29, 9]},
          {question: 9, answers: [14, 6, 22]},
          {question: 10, answers: [26, 8, 7]}
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
          {question: 1, answers: [11, 14, 27]},
          {question: 2, answers: [25, 1, 30]},
          {question: 3, answers: [17, 16, 21]},
          {question: 4, answers: [9, 20, 4]},
          {question: 5, answers: [29, 22, 12]},
          {question: 6, answers: [26, 24, 6]},
          {question: 7, answers: [2, 18, 23]},
          {question: 8, answers: [19, 8, 3]},
          {question: 9, answers: [15, 28, 13]},
          {question: 10, answers: [5, 7, 10]}
        ]
      },
      {
        words: [
          { id: 0, title: '', containerId: 0 },
          { id: 1, title: '', containerId: 0 },
          { id: 2, title: '', containerId: 0 },
          { id: 3, title: '', containerId: 0 },
          { id: 4, title: '', containerId: 0 },
          { id: 5, title: '', containerId: 0 },
          { id: 6, title: '', containerId: 0 },
          { id: 7, title: '', containerId: 0 },
          { id: 8, title: '', containerId: 0 },
          { id: 9, title: '', containerId: 0 },
          { id: 10, title: '', containerId: 0 },
          { id: 11, title: '', containerId: 0 },
          { id: 12, title: '', containerId: 0 },
          { id: 13, title: '', containerId: 0 },
          { id: 14, title: '', containerId: 0 },
          { id: 15, title: '', containerId: 0 },
          { id: 16, title: '', containerId: 0 },
          { id: 17, title: '', containerId: 0 },
          { id: 18, title: '', containerId: 0 },
          { id: 19, title: '', containerId: 0 },
          { id: 20, title: '', containerId: 0 },
          { id: 21, title: '', containerId: 0 },
          { id: 22, title: '', containerId: 0 },
          { id: 23, title: '', containerId: 0 },
          { id: 24, title: '', containerId: 0 },
          { id: 25, title: '', containerId: 0 },
          { id: 26, title: '', containerId: 0 },
          { id: 27, title: '', containerId: 0 },
          { id: 28, title: '', containerId: 0 },
          { id: 29, title: '', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: ''},
          {number: 2, title: ''},
          {number: 3, title: ''},
          {number: 4, title: ''},
          {number: 5, title: ''},
          {number: 6, title: ''},
          {number: 7, title: ''},
          {number: 8, title: ''},
          {number: 9, title: ''},
          {number: 10, title: ''},
        ],
        rightAnswers: [
          {question: 1, answers: [, , ]},
          {question: 2, answers: [, , ]},
          {question: 3, answers: [, , ]},
          {question: 4, answers: [, , ]},
          {question: 5, answers: [, , ]},
          {question: 6, answers: [, , ]},
          {question: 7, answers: [, , ]},
          {question: 8, answers: [, , ]},
          {question: 9, answers: [, , ]},
          {question: 10, answers: [, , ]}
        ]
      },
      {
        words: [
          { id: 0, title: '', containerId: 0 },
          { id: 1, title: '', containerId: 0 },
          { id: 2, title: '', containerId: 0 },
          { id: 3, title: '', containerId: 0 },
          { id: 4, title: '', containerId: 0 },
          { id: 5, title: '', containerId: 0 },
          { id: 6, title: '', containerId: 0 },
          { id: 7, title: '', containerId: 0 },
          { id: 8, title: '', containerId: 0 },
          { id: 9, title: '', containerId: 0 },
          { id: 10, title: '', containerId: 0 },
          { id: 11, title: '', containerId: 0 },
          { id: 12, title: '', containerId: 0 },
          { id: 13, title: '', containerId: 0 },
          { id: 14, title: '', containerId: 0 },
          { id: 15, title: '', containerId: 0 },
          { id: 16, title: '', containerId: 0 },
          { id: 17, title: '', containerId: 0 },
          { id: 18, title: '', containerId: 0 },
          { id: 19, title: '', containerId: 0 },
          { id: 20, title: '', containerId: 0 },
          { id: 21, title: '', containerId: 0 },
          { id: 22, title: '', containerId: 0 },
          { id: 23, title: '', containerId: 0 },
          { id: 24, title: '', containerId: 0 },
          { id: 25, title: '', containerId: 0 },
          { id: 26, title: '', containerId: 0 },
          { id: 27, title: '', containerId: 0 },
          { id: 28, title: '', containerId: 0 },
          { id: 29, title: '', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: ''},
          {number: 2, title: ''},
          {number: 3, title: ''},
          {number: 4, title: ''},
          {number: 5, title: ''},
          {number: 6, title: ''},
          {number: 7, title: ''},
          {number: 8, title: ''},
          {number: 9, title: ''},
          {number: 10, title: ''},
        ],
        rightAnswers: [
          {question: 1, answers: [, , ]},
          {question: 2, answers: [, , ]},
          {question: 3, answers: [, , ]},
          {question: 4, answers: [, , ]},
          {question: 5, answers: [, , ]},
          {question: 6, answers: [, , ]},
          {question: 7, answers: [, , ]},
          {question: 8, answers: [, , ]},
          {question: 9, answers: [, , ]},
          {question: 10, answers: [, , ]}
        ]
      },
      {
        words: [
          { id: 0, title: '', containerId: 0 },
          { id: 1, title: '', containerId: 0 },
          { id: 2, title: '', containerId: 0 },
          { id: 3, title: '', containerId: 0 },
          { id: 4, title: '', containerId: 0 },
          { id: 5, title: '', containerId: 0 },
          { id: 6, title: '', containerId: 0 },
          { id: 7, title: '', containerId: 0 },
          { id: 8, title: '', containerId: 0 },
          { id: 9, title: '', containerId: 0 },
          { id: 10, title: '', containerId: 0 },
          { id: 11, title: '', containerId: 0 },
          { id: 12, title: '', containerId: 0 },
          { id: 13, title: '', containerId: 0 },
          { id: 14, title: '', containerId: 0 },
          { id: 15, title: '', containerId: 0 },
          { id: 16, title: '', containerId: 0 },
          { id: 17, title: '', containerId: 0 },
          { id: 18, title: '', containerId: 0 },
          { id: 19, title: '', containerId: 0 },
          { id: 20, title: '', containerId: 0 },
          { id: 21, title: '', containerId: 0 },
          { id: 22, title: '', containerId: 0 },
          { id: 23, title: '', containerId: 0 },
          { id: 24, title: '', containerId: 0 },
          { id: 25, title: '', containerId: 0 },
          { id: 26, title: '', containerId: 0 },
          { id: 27, title: '', containerId: 0 },
          { id: 28, title: '', containerId: 0 },
          { id: 29, title: '', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: ''},
          {number: 2, title: ''},
          {number: 3, title: ''},
          {number: 4, title: ''},
          {number: 5, title: ''},
          {number: 6, title: ''},
          {number: 7, title: ''},
          {number: 8, title: ''},
          {number: 9, title: ''},
          {number: 10, title: ''},
        ],
        rightAnswers: [
          {question: 1, answers: [, , ]},
          {question: 2, answers: [, , ]},
          {question: 3, answers: [, , ]},
          {question: 4, answers: [, , ]},
          {question: 5, answers: [, , ]},
          {question: 6, answers: [, , ]},
          {question: 7, answers: [, , ]},
          {question: 8, answers: [, , ]},
          {question: 9, answers: [, , ]},
          {question: 10, answers: [, , ]}
        ]
      },
      {
        words: [
          { id: 0, title: '', containerId: 0 },
          { id: 1, title: '', containerId: 0 },
          { id: 2, title: '', containerId: 0 },
          { id: 3, title: '', containerId: 0 },
          { id: 4, title: '', containerId: 0 },
          { id: 5, title: '', containerId: 0 },
          { id: 6, title: '', containerId: 0 },
          { id: 7, title: '', containerId: 0 },
          { id: 8, title: '', containerId: 0 },
          { id: 9, title: '', containerId: 0 },
          { id: 10, title: '', containerId: 0 },
          { id: 11, title: '', containerId: 0 },
          { id: 12, title: '', containerId: 0 },
          { id: 13, title: '', containerId: 0 },
          { id: 14, title: '', containerId: 0 },
          { id: 15, title: '', containerId: 0 },
          { id: 16, title: '', containerId: 0 },
          { id: 17, title: '', containerId: 0 },
          { id: 18, title: '', containerId: 0 },
          { id: 19, title: '', containerId: 0 },
          { id: 20, title: '', containerId: 0 },
          { id: 21, title: '', containerId: 0 },
          { id: 22, title: '', containerId: 0 },
          { id: 23, title: '', containerId: 0 },
          { id: 24, title: '', containerId: 0 },
          { id: 25, title: '', containerId: 0 },
          { id: 26, title: '', containerId: 0 },
          { id: 27, title: '', containerId: 0 },
          { id: 28, title: '', containerId: 0 },
          { id: 29, title: '', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: ''},
          {number: 2, title: ''},
          {number: 3, title: ''},
          {number: 4, title: ''},
          {number: 5, title: ''},
          {number: 6, title: ''},
          {number: 7, title: ''},
          {number: 8, title: ''},
          {number: 9, title: ''},
          {number: 10, title: ''},
        ],
        rightAnswers: [
          {question: 1, answers: [, , ]},
          {question: 2, answers: [, , ]},
          {question: 3, answers: [, , ]},
          {question: 4, answers: [, , ]},
          {question: 5, answers: [, , ]},
          {question: 6, answers: [, , ]},
          {question: 7, answers: [, , ]},
          {question: 8, answers: [, , ]},
          {question: 9, answers: [, , ]},
          {question: 10, answers: [, , ]}
        ]
      },
      {
        words: [
          { id: 0, title: '', containerId: 0 },
          { id: 1, title: '', containerId: 0 },
          { id: 2, title: '', containerId: 0 },
          { id: 3, title: '', containerId: 0 },
          { id: 4, title: '', containerId: 0 },
          { id: 5, title: '', containerId: 0 },
          { id: 6, title: '', containerId: 0 },
          { id: 7, title: '', containerId: 0 },
          { id: 8, title: '', containerId: 0 },
          { id: 9, title: '', containerId: 0 },
          { id: 10, title: '', containerId: 0 },
          { id: 11, title: '', containerId: 0 },
          { id: 12, title: '', containerId: 0 },
          { id: 13, title: '', containerId: 0 },
          { id: 14, title: '', containerId: 0 },
          { id: 15, title: '', containerId: 0 },
          { id: 16, title: '', containerId: 0 },
          { id: 17, title: '', containerId: 0 },
          { id: 18, title: '', containerId: 0 },
          { id: 19, title: '', containerId: 0 },
          { id: 20, title: '', containerId: 0 },
          { id: 21, title: '', containerId: 0 },
          { id: 22, title: '', containerId: 0 },
          { id: 23, title: '', containerId: 0 },
          { id: 24, title: '', containerId: 0 },
          { id: 25, title: '', containerId: 0 },
          { id: 26, title: '', containerId: 0 },
          { id: 27, title: '', containerId: 0 },
          { id: 28, title: '', containerId: 0 },
          { id: 29, title: '', containerId: 0 },
        ],
        phrases: [
          {number: 1, title: ''},
          {number: 2, title: ''},
          {number: 3, title: ''},
          {number: 4, title: ''},
          {number: 5, title: ''},
          {number: 6, title: ''},
          {number: 7, title: ''},
          {number: 8, title: ''},
          {number: 9, title: ''},
          {number: 10, title: ''},
        ],
        rightAnswers: [
          {question: 1, answers: [, , ]},
          {question: 2, answers: [, , ]},
          {question: 3, answers: [, , ]},
          {question: 4, answers: [, , ]},
          {question: 5, answers: [, , ]},
          {question: 6, answers: [, , ]},
          {question: 7, answers: [, , ]},
          {question: 8, answers: [, , ]},
          {question: 9, answers: [, , ]},
          {question: 10, answers: [, , ]}
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
    }
  },
  actions: {

  },

  namespaced: true
}

export default testModule;

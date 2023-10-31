import { gaugeChart } from '../../dist/bundle.mjs'

const element = document.querySelector('#gaugeArea')

const gaugeOptions = {
  // needle options
  hasNeedle: true,
  outerNeedle: false,
  needleColor: 'black',
  needleStartValue: 0,
  needleUpdateSpeed: 1000,
  // arc options
  arcColors: ['green', 'orange', 'red'],
  arcDelimiters: [1, 15],
  arcPadding: 0,
  arcPaddingColor: 'white',
  arcLabels: ['', '$123.5M'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  // rangeLabel: ['0', '350'],
  centralLabel: '11%',
  rangeLabelFontSize: false,
  labelsFont: 'Sans,Arial',
  currentValue: 85, // in percentage
  currentValueCurrency: '$344.5M',
}
const gaugeOptions2 = {
  // needle options
  hasNeedle: true,
  outerNeedle: false,
  needleColor: 'black',
  needleStartValue: 0,
  needleUpdateSpeed: 1000,
  // arc options
  arcColors: ['green', 'orange', 'red'],
  arcDelimiters: [50, 75],
  arcPadding: 0,
  arcPaddingColor: 'white',
  arcLabels: ['', '$123.5M'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  // rangeLabel: ['0', '350'],
  centralLabel: '5%',
  rangeLabelFontSize: false,
  labelsFont: 'Sans,Arial',
  currentValue: 15, // in percentage
  currentValueCurrency: '$344.5M',
}
const gaugeOptions3 = {
  // needle options
  hasNeedle: true,
  outerNeedle: false,
  needleColor: 'black',
  needleStartValue: 0,
  needleUpdateSpeed: 1000,
  // arc options
  arcColors: ['green', 'orange', 'red'],
  arcDelimiters: [50, 75],
  arcPadding: 0,
  arcPaddingColor: 'white',
  arcLabels: ['', '$123.5M'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  // rangeLabel: ['0', '350'],
  centralLabel: '175%',
  rangeLabelFontSize: false,
  labelsFont: 'Sans,Arial',
  currentValue: 35, // in percentage
  currentValueCurrency: '$344.5M',
}
const gaugeOptions4 = {
  // needle options
  hasNeedle: true,
  outerNeedle: false,
  needleColor: 'black',
  needleStartValue: 0,
  needleUpdateSpeed: 1000,
  // arc options
  arcColors: ['green', 'orange', 'red'],
  arcDelimiters: [50, 75],
  arcPadding: 0,
  arcPaddingColor: 'white',
  arcLabels: ['', '$123.5M'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  // rangeLabel: ['0', '350'],
  centralLabel: '175%',
  rangeLabelFontSize: false,
  labelsFont: 'Sans,Arial',
  currentValue: 60, // in percentage
  currentValueCurrency: '$344.5M',
}
const gaugeOptions5 = {
  // needle options
  hasNeedle: true,
  outerNeedle: false,
  needleColor: 'black',
  needleStartValue: 0,
  needleUpdateSpeed: 1000,
  // arc options
  arcColors: ['green', 'orange', 'red'],
  arcDelimiters: [50, 75],
  arcPadding: 0,
  arcPaddingColor: 'white',
  arcLabels: ['', '$123.5M'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  // rangeLabel: ['0', '350'],
  centralLabel: '175%',
  rangeLabelFontSize: false,
  labelsFont: 'Sans,Arial',
  currentValue: 85, // in percentage
  currentValueCurrency: '$344.5M',
}

gaugeChart(element, 300, gaugeOptions).updateNeedle(gaugeOptions.currentValue)
gaugeChart(
  document.querySelector('#gaugeArea2'),
  300,
  gaugeOptions2,
).updateNeedle(15)
gaugeChart(
  document.querySelector('#gaugeArea3'),
  300,
  gaugeOptions3,
).updateNeedle(35)
gaugeChart(
  document.querySelector('#gaugeArea4'),
  300,
  gaugeOptions4,
).updateNeedle(60)
gaugeChart(
  document.querySelector('#gaugeArea5'),
  300,
  gaugeOptions5,
).updateNeedle(85)

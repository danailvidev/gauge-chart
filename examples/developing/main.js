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
  arcDelimiters: [50, 75],
  arcPadding: 0,
  arcPaddingColor: 'white',
  arcLabels: ['', '$ 123,456,789'],
  arcLabelFontSize: false,
  // arcOverEffect: false,
  // label options
  // rangeLabel: ['0', '350'],
  centralLabel: '175%',
  rangeLabelFontSize: false,
  labelsFont: 'Roboto',
  currentValue: 15, // in percentage
  currentValueCurrency: '$ 344,343,345',
}

gaugeChart(element, 450, gaugeOptions).updateNeedle(gaugeOptions.currentValue)

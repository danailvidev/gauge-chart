import { gaugeChart } from '../../dist/bundle.mjs'
// 9999999 -> $0.9M
export const formatNumberShort = (number) => {
  const rawNumber = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 4,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 2,
    // @ts-ignore
    roundingMode: 'floor',
  }).format(number / 1000000)

  return addPrefixAndSuffix(rawNumber)
}

// 999999 -> $4,445,455
export const formatNumberLong = (number) => {
  const rawNumber = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 4,
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 2,
    // @ts-ignore
    roundingMode: 'floor',
  }).format(number)

  return `$${rawNumber}`
}

export const addPrefixAndSuffix = (number) => {
  const currencySign = '$'
  return `${currencySign}${number}M`
}

const element = document.querySelector('#gaugeArea')
const widgets = [
  {
    policyGroupName: 'Serco Short Tail',
    policyGroupYear: 2016,
    label: 'Serco Short Tail - 2016',
    nonRankingExcess: 613987.44,
    selfInsuredCaptiveRetention: 0.0,
    insuredAmount: 14143241.75,
    limitValue: 9999999.0,
    currentPercentageValue: 0.4419763,
    currencyCode: 'GBP',
  },
  {
    policyGroupName: 'Serco Long Tail',
    policyGroupYear: 2017,
    label: 'Serco Long Tail - 2017',
    nonRankingExcess: 119483.32,
    selfInsuredCaptiveRetention: 0.0,
    insuredAmount: 3137699.33,
    limitValue: 9999999.0,
    currentPercentageValue: 0.0,
    currencyCode: 'GBP',
  },
]

widgets.forEach((w) => {
  const firstDelimiterTreshold = 74
  const secondDelimiterTreshold = 75
  const gaugeOptions = {
    hasNeedle: true,
    outerNeedle: false,
    needleColor: 'black',
    needleStartValue: 0,
    needleUpdateSpeed: 1000,
    arcColors: ['green', 'orange', 'red'],
    arcDelimiters: [
      (firstDelimiterTreshold * secondDelimiterTreshold) / 100,
      secondDelimiterTreshold,
    ],
    arcPadding: 1,
    arcPaddingColor: 'white',
    arcLabels: ['', formatNumberShort(w.limitValue)],
    arcLabelFontSize: false,
    centralLabel: '44%',
    rangeLabelFontSize: 17.334, // 26px,
    labelsFont: 'Arial',
    currentValue: w.currentPercentageValue * secondDelimiterTreshold,
    currentValueCurrency: formatNumberShort(
      w.currentPercentageValue * w.limitValue,
    ),
  }

  gaugeChart(
    document.querySelector('#gaugeArea'),
    300,
    gaugeOptions,
  ).updateNeedle(gaugeOptions.currentValue)
})

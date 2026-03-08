const rootCss = document.querySelector(':root')

const rand = Math.random()

if (Math.round(rand * 10) / 10 == 0.1) {
  rootCss.style.setProperty('--pastel-orange-blade', '#F2CB9D')
  rootCss.style.setProperty('--pastel-purple-blade', '#D5B2D8')
  rootCss.style.setProperty('--pastel-green-blade', '#BDF0C1')
  rootCss.style.setProperty('--pastel-red-blade', '#F2A4A4')
  rootCss.style.setProperty('--pastel-yellow-blade', '#F0F2AD')
  rootCss.style.setProperty('--pastel-blue-blade', '#94EBF2')
}
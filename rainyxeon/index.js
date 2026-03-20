import prettyMilliseconds from "/global/lib/pretty_ms/index.js"

// online/exp data
const online_data = document.getElementById('online_data')
const exp_data = document.getElementById('exp_data')

// Initial set
online_data.innerHTML = `<strong>Online:</strong> ${prettyMilliseconds(Date.now() - 1210872600000)}`
exp_data.innerHTML = `<strong>Years of Experience:</strong> ${prettyMilliseconds(Date.now() - 1588294800000)}`

// Updater
setInterval(() => {
  online_data.innerHTML = `<strong>Online:</strong> ${prettyMilliseconds(Date.now() - 1210872600000)}`
  exp_data.innerHTML = `<strong>Years of Experience:</strong> ${prettyMilliseconds(Date.now() - 1588294800000)}`
}, 1000)
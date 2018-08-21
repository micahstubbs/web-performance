// SETUP 🏁

let iterations = 1e7

const a = 1
const b = 2

const add = (x, y) => x + y

// 🔚 SETUP

window.performance.mark('start')

// EXERCISE 💪

while (iterations--) {
  add(a, b)
}

// 🔚 EXERCISE

window.performance.mark('end')

window.performance.measure('My Special Benchmark', 'start', 'end')

const [measure] = window.performance.getEntriesByName('My Special Benchmark')
console.log('PerformanceEntry')
console.log(`name: ${measure.name}`)
console.log(`entryType: ${measure.entryType}`)
console.log(`startTime: ${measure.startTime}`)
console.log(`duration: ${measure.duration} milliseconds`)

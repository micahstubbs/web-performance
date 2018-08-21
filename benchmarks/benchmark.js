const { performance } = require('perf_hooks')

// SETUP 🏁

let iterations = 1e7

const a = 1
const b = 2

const add = (x, y) => x + y

// 🔚 SETUP

performance.mark('start')

// EXERCISE 💪

while (iterations--) {
  add(a, b)
}

// add('foo' + 'bar')

while (iterations--) {
  add(a, b)
}

// 🔚 EXERCISE

performance.mark('end')

performance.measure('My Special Benchmark', 'start', 'end')

const [measure] = performance.getEntriesByName('My Special Benchmark')
console.log('PerformanceEntry')
console.log(`name: ${measure.name}`)
console.log(`entryType: ${measure.entryType}`)
console.log(`startTime: ${measure.startTime}`)
console.log(`duration: ${measure.duration} milliseconds`)

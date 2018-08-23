const { performance } = require('perf_hooks')

// SETUP 🏁

let iterations = 1e5

const square = x => x * x
const sumOfSquares = (a, b) => square(a) + square(b)

// 🔚 SETUP

performance.mark('start')

// EXERCISE 💪
while (iterations--) {
  sumOfSquares(iterations, iterations + 1)
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

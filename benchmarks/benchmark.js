const { performance } = require('perf_hooks')

// SETUP 🏁

let iterations = 1e6

const objects = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]

// 🔚 SETUP

performance.mark('start')

// EXERCISE 💪

while (iterations--) {
  let sum = 0
  const obj = objects[iterations & 3]
  sum = sum + obj.a
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

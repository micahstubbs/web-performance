const { performance } = require('perf_hooks')

// SETUP 🏁

let iterations = 1e5

// 🔚 SETUP

performance.mark('start')

// EXERCISE 💪
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

const test = () => {
  const add = point => point.x + point.y

  const point = new Point(10, 20)
  add(point)
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

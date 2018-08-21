const { performance } = require('perf_hooks')

// SETUP 🏁

let iterations = 1e7

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

%NeverOptimizeFunction(add)

while (iterations--) {
  const point = new Point(2, 4);

  JSON.stringify(point)
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

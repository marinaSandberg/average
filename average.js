class MovingAverage {
    constructor(N) {
      this.N = N;
      this.queue = [];
    }
    
    add(number) {
      this.queue.push(number);
      if (this.queue.length > this.N) {
        this.queue.shift();
      }
      return this.queue.reduce((sum, n) => sum + n) / this.queue.length;
    }
  }
  

  
  // Constraints
  // N can be any number from 0 to 999999
  
  // 0 < N < 999999
  
  // X can be any number from 0 to 9999999999
  
  // 0 < X < 9999999999
  
  // Examples
  // MovingAverage(3)
  // add(3) == 3.0
  // add(4) == 3.5
  // add(5) == 4.0
  // add(4) == 4.333333333333333
  // MovingAverage(2)
  // add(3) == 3.0
  // add(4) == 3.5
  // add(5) == 4.5
  // add(6) == 5.5
  // MovingAverage(1)
  // add(3) == 3.0
  // add(4) == 4.0
  // add(5) == 5.0
  // add(6) == 6.0
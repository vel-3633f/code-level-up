// class Buffer {
//   #size = 13;
//   get size() {
//     return this.#size;
//   }
// }

// const a = new Buffer();
// console.log(a.size);

// let Square = class {
//   constructor(x) {
//     this.area = x * x;
//   }
// };

// console.log(new Square(3).area);

// class Range {
//   constructor(from, to) {
//     this.from = from;
//     this.to = to;
//   }

//   includes(x) {
//     return this.from <= x && this.to >= x;
//   }

//   toString() {
//     return `(${this.from},${this.to})`;
//   }

//   static parse(s) {
//     let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
//     if (!matches) {
//       throw new TypeError(`Cannot parse Range from ""${s}`);
//     }
//     return new Range(parseInt(matches[1]), parseInt(matches[2]));
//   }
// }

// console.log(Range.parse("(1...10)"));
// class Span extends Range {
//   constructor(start, length) {
//     if (length >= 0) {
//       super(start, start + length);
//     } else {
//       super(start + length, start);
//     }
//   }
// }

// let r = new Range(1, 2);
// let n = new Span(1, 2);
// console.log(n.includes(2));

// 糖衣構文 以下例
// let x = 0;
// x = x + 1;
// x++;

// // 例 9.2
// function Range(from, to) {
//   this.from = from;
//   this.to = to;
// }

// Range.prototype = {
//   includes: function (x) {
//     return this.from <= x && x <= this.to;
//   },

//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },

//   toString: function (x) {
//     return `(${this.from},${this.to})`;
//   },
// };

// let r = new Range(1, 3);

// console.log(r.includes(4));
// console.log(r.toString());
// console.log([...r]); //ここわからん

// 例 9.1
// function range(from, to) {
//   let r = Object.create(range.methods);

//   r.from = from;
//   r.to = to;

//   return r;
// }

// range.methods = {
//   includes(x) {
//     return this.from <= x && x <= this.to;
//   },

//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },

//   toString() {
//     return `(${this.from},${this.to})`;
//   },
// };
// let r = range(1, 3);

// console.log(r.includes(4));
// console.log(r.toString());
// console.log([...r]); //ここわからん




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

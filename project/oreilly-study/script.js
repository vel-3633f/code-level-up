function range(from, to) {
  let r = Object.create(range.methods);

  r.from = from;
  r.to = to;

  return r;
}

range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
};
let r = range(1, 3);

console.log(r.includes(4));

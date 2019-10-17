const IG = (x) => ({
  [Symbol.iterator]: x,
});

export const P = {
  pipe: (x, ...fa) => {
    fa.forEach(f => x = f(x));
    return x;
  },
  compose: (...fa) => (x) => {
    fa.forEach(f => x = f(x));
    return x;
  },
  map: (f) => (ar) => ar.map(f),
  filter: (f) => (ar) => ar.filter(f),
  fold: (f, i) => (ar) => {
    ar.forEach(x => i = f(i, x));
    return i;
  },
  scan: (f, i) => (ar) => {
    var res = Array.from({length: ar.length});
    ar.forEach((x, p) => res[p] = i = f(i, x));
    return res;
  },
  length: (ar) => ar.length,
  Gen: {
    numbers : (start = 0, end = Infinity) => IG(function* (){
      var i = start;
      while(i<end) yield i++;
    }),
    map: (f) => (gen) => IG(function* () {
      for (var x of gen) {
        yield f(x);
      } 
    }),
    filter: (f) => (gen) => IG(function* () {
      for (var x of gen) {
        if (f(x)) yield x;
      }
    }),
    take: (limit) => (gen) => IG(function* () {
      var i = limit;
      for (var x of gen) {
        if (0 == i--) break;
        yield x;
      }
    }),
    zip: (gen1) => (gen2) => IG(function* () {
      var g2i = gen2[Symbol.iterator]();
      for (var x of gen1) {
        var {done, value} = g2i.next();
        if (done) break;
        yield [x, value];
      }
    }),
    toArray : (limit = Infinity) => (gen) => {
      var res = [];
      for (var x of gen) {
        if (res.length >= limit) break;
        res.push(x);
      }
      return res;
    },
  }
};

const x = "salam";
const y = P.Gen.zip(P.Gen.map(x=>2*x)(x))(x);
console.log(...y);

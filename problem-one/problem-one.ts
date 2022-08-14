const pythagoreanTriplet = (n: number): string => {
  for (let a = 1; a < n / 2; a++) {
    for (let b = 1; b < n / 2; b++) {
      let c = Math.sqrt(a * a + b * b);
      if (a + b + c === n) return `a:${a}, b:${b}, c:${c}`;
    }
  }
  return "no such numbers";
};

console.log(pythagoreanTriplet(1000));

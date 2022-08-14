const isPrime = (num: number) => {
  if (num < 3) return num < 2 ? false : true;
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const s = (n: number): number => {
  let counter = 0;
  let primed: number[] = [];
  for (let i = 1; i < n + 1; i++) {
    if (isPrime(i)) {
      let isAllPrime = true;
      let strI = String(i);

      for (let v = 0; v < strI.length; v++) {
        strI = strI.slice(1) + strI[0];

        isAllPrime = isPrime(+strI);
        if (!isAllPrime) break;
      }

      if (isAllPrime) {
        counter++;
        primed.push(i);
      }
    }
  }
  console.log(primed);

  return counter;
};

console.log(s(1000000));

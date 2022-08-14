const buildSequence = (currentNumber: number): number => {
  let counter = 1;
  while (currentNumber !== 1) {
    currentNumber % 2 === 0
      ? (currentNumber = currentNumber / 2)
      : (currentNumber = 3 * currentNumber + 1);
    ++counter;
  }

  return counter;
};

const solution = (n: number): number => {
  if (n < 2) return 0;
  let result = 0,
    maxLength = 0;
  for (let i = 2; i < n; i++) {
    const sequenceLength = buildSequence(i);
    if (sequenceLength > maxLength) {
      maxLength = sequenceLength;
      result = i + 1;
    }
  }
  return result;
};

console.log("result", solution(13));

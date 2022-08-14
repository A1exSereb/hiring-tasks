import { readFileSync } from "../utils";

const data = readFileSync("data.txt")
  .split("\r\n")
  .map((el) => el.split(" "));

console.log(data);

const solution = (data: string[][]) => {
  let sum = +data[0][0];

  let colIndex = 0;
  for (let i = 1; i < data.length; i++) {
    let highestNum = Number.NEGATIVE_INFINITY,
      indexOfHighestNum = 0;

    for (let j = colIndex === 0 ? 0 : colIndex - 1; j < colIndex + 2; j++) {
      let currentNum =
        data[i][j] !== undefined ? +data[i][j] : Number.NEGATIVE_INFINITY;

      if (currentNum > highestNum) {
        highestNum = currentNum;
        indexOfHighestNum = j;
      }
    }

    sum += highestNum;
    colIndex = indexOfHighestNum;
  }
  return sum;
};

console.log(solution(data));

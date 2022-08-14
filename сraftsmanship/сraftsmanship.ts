import { readFileSync } from "../utils";
import { MapI, OrderBookI, OrderBookMapI, Sides } from "./types";

const craftmanship = (data: string[]) => {
  const headlines = data.shift()?.split(",") as string[];
  let askMap = {
    books: [],
    indexes: new Map<string, string>(),
  } as MapI;
  let bidMap = {
    books: [],
    indexes: new Map<string, string>(),
  } as MapI;

  //   console.log("headlines", headlines);
  //   console.log("shift data", data);

  for (const row of data) {
    let currentObject = {} as OrderBookI;
    let rowArr: string[] = row.split(",");
    for (let i = 0; i < headlines.length; i++) {
      let headline = headlines[i];
      currentObject[headline as keyof OrderBookI] = rowArr[i];
    }
    if (currentObject.side === Sides.BID) {
      const isExist = bidMap.indexes.has(currentObject.symbol);
      const index = String(bidMap.books.length);

      if (!isExist) {
        bidMap.indexes.set(currentObject.symbol, index);
        bidMap.books.push(currentObject);
      } else {
        const index = bidMap.indexes.get(currentObject.symbol) as string;
        const obj = bidMap.books[+index];
        if (Math.max(+obj.price, +currentObject.price) === +obj.price)
          bidMap.books.splice(+index, 1, currentObject);
      }
    } else {
      const isExist = askMap.indexes.has(currentObject.symbol);
      const index = String(askMap.books.length);

      if (!isExist) {
        askMap.indexes.set(currentObject.symbol, index);
        askMap.books.push(currentObject);
      } else {
        const index = askMap.indexes.get(currentObject.symbol) as string;
        const obj = askMap.books[+index];
        if (Math.min(+obj.price, +currentObject.price) === +obj.price)
          askMap.books.splice(+index, 1, currentObject);
      }
    }
  }
  return { bid: bidMap.books, ask: askMap.books };
};

const data = readFileSync("data.csv").split("\n");

console.log(craftmanship(data));

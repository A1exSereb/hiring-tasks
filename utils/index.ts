import * as fs from "fs";

export const readFileSync = (path: string): string => {
  return fs.readFileSync(path, "utf-8");
};

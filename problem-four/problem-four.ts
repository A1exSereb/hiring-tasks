const permutations = (array: number[], requiredIndex?: number) => {
  if (array.length < 2) return array;
  else {
    let perms: number[][] = [];
    for (let i = 0; i < array.length; i++) {
      let rest = [...array];
      rest.splice(i, 1);

      let ps = permutations(rest);

      const current = [array[i]];

      for (let p of ps) {
        perms.push(current.concat(p));
      }
    }
    return requiredIndex ? perms[requiredIndex] : perms;
  }
};

console.log(permutations([0, 1, 2]));

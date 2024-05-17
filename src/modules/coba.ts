export const GREEN_DIE = 0;
export const GREY_DIE = 1;
export const ORANGE_DIE = 2;
export const YELLOW_DIE = 3;
export const PINK_DIE = 4;
export const BLUE_DIE = 5;
export function calculTeamScore(dices: number[]): number {
    const nbDesRoses = dices.filter((d) => d === PINK_DIE).length;
    const nbDesOrange = dices.filter((d) => d === ORANGE_DIE).length;
    const nbDesPasBleus = dices.filter((d) => d !== BLUE_DIE).length;
  
    let total = dices.reduce((sum, val) => {
      if (val === GREEN_DIE) {
        return sum + 1;
      } else if (val === GREY_DIE) {
        return sum + 2;
      } else if (val === YELLOW_DIE) {
        return sum - 1;
      } else if (val === PINK_DIE) {
        return sum + 3;
      } else if (val === BLUE_DIE) {
        return sum + nbDesPasBleus;
      }
      else if (val === ORANGE_DIE) {
        total = Math.floor(total/2)
      }
      return sum;
    }, 0);
  
    total -= Math.min(nbDesRoses, nbDesOrange) * 3;
  
    return Math.max(total, 0);
  }
  
  
export function isEqual(a: number[], b: number[]): boolean {
  return calculTeamScore(a) === calculTeamScore(b);
}

export function getAllDiceCombinations(dices: number[]): [number[], number[]][] {
    const toCombine = new Array(dices.length).fill("").map((_, i) => i);
    let combinations: [number[], number[]][] = [];
    let temp: number[] = [];
    let slent = Math.pow(2, toCombine.length) - 1;
  
    for (let i = 0; i < slent; i++) {
      temp = [];
      for (var j = 0; j < toCombine.length; j++) {
        if (i & Math.pow(2, j)) {
          temp.push(toCombine[j]);
        }
      }
  
      if (temp.length > 0) {
        combinations.push([temp.map(e => dices[e]), toCombine.filter(index => temp.indexOf(index) === -1).map(e => dices[e])]);
      }
    }
  
    return combinations;
  }
  

export function findSolution(dices: number[]): [number[], number[]] | undefined {
  const combinations = getAllDiceCombinations(dices);
  return combinations.find(([teamA, teamB]) => isEqual(teamA, teamB));
}
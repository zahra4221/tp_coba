import { describe, test, expect } from 'vitest';
import { calculTeamScore, getAllDiceCombinations, GREEN_DIE, GREY_DIE, ORANGE_DIE, YELLOW_DIE, PINK_DIE, BLUE_DIE, isEqual, findSolution } from '../modules/coba';


describe('basic test to see if the equal is working', () => {
    describe('returns true for arrays with the same team score',()=>{
        test('comparaison equal simple', () => {
            expect(calculTeamScore([GREEN_DIE, GREY_DIE])).toBe(1 + 2);
            expect(calculTeamScore([GREY_DIE, GREEN_DIE])).toBe(2 + 1); 
        })

    describe('returns false for arrays with different team scores',()=>{    
        test('first check with two die', () => {
            expect(calculTeamScore([GREEN_DIE])).toBe(1); 
            expect(calculTeamScore([GREY_DIE])).toBe(2); 
        });
    });
    describe('returns false for arrays with different team scores',()=>{    
        test('check if it returns false when it\'s not the same score', () => {
            expect(calculTeamScore([BLUE_DIE, BLUE_DIE])).toThrowError; 
            expect(calculTeamScore([PINK_DIE, GREEN_DIE])).toThrowError; 
        });
    });
});
});


describe('special yellow cases', () => {
    describe('what happen if negative score',()=>{
        test('does not allow negative scores', () => {
            expect(calculTeamScore([YELLOW_DIE, YELLOW_DIE])).toBe(0);
        })
    })
        test('special defi with yellow cases',()=>{
            expect(calculTeamScore([GREY_DIE,GREY_DIE,ORANGE_DIE,YELLOW_DIE])).toBe(5)
            expect(calculTeamScore([GREY_DIE,GREY_DIE,ORANGE_DIE])).toBe(5)
        })
});


describe('special cases with orange die',()=>{
    test('check what happen if even and odd orange number ',()=>{
        expect(calculTeamScore([GREEN_DIE,GREEN_DIE,GREY_DIE, ORANGE_DIE])).toBe(6)
        expect(calculTeamScore([GREY_DIE,GREY_DIE,GREY_DIE])).toBe(6)
    })
    test('check what happen if even and odd orange number ',()=>{
        expect(calculTeamScore([GREEN_DIE,GREEN_DIE,GREY_DIE, ORANGE_DIE])).toBe(6)
        expect(calculTeamScore([GREY_DIE,GREY_DIE,GREY_DIE])).toBe(6)
    })
})


describe('special cases with blue die',()=>{
    test('check what happen when there is a chamane die',()=>{
        expect(calculTeamScore([GREEN_DIE,GREEN_DIE,GREY_DIE, GREEN_DIE, GREY_DIE])).toBe(7)
        expect(calculTeamScore([GREY_DIE,BLUE_DIE])).toBe(7)
    })
})

describe('special cases with pink die',()=>{
    test('check what happen when there is a queen die',()=>{
        expect(calculTeamScore([BLUE_DIE,GREY_DIE])).toBe(7)
        expect(calculTeamScore([GREY_DIE,BLUE_DIE, GREEN_DIE,ORANGE_DIE,PINK_DIE])).toBe(7)
    })
    test('special case when there is 2 queen in the same team',()=>{
        expect(calculTeamScore([PINK_DIE,PINK_DIE,YELLOW_DIE,ORANGE_DIE])).toBe(8)
        expect(calculTeamScore([GREY_DIE,GREY_DIE, BLUE_DIE])).toBe(8)
    })
})

describe('getAllDiceCombinations width 4 die', () => {
    test('returns all possible combinations of two teams for (orange, orange, pink, green)', () => {
      const combinations1 = getAllDiceCombinations([ORANGE_DIE, ORANGE_DIE, PINK_DIE, GREEN_DIE]);
      expect(combinations1).toContainEqual([[ORANGE_DIE], [ORANGE_DIE, PINK_DIE, GREEN_DIE]]); 
      expect(combinations1).toContainEqual([[ORANGE_DIE, ORANGE_DIE], [PINK_DIE, GREEN_DIE]]); 
      expect(combinations1).toContainEqual([[ORANGE_DIE, PINK_DIE], [ORANGE_DIE, GREEN_DIE]]); 
      expect(combinations1).toContainEqual([[ORANGE_DIE, GREEN_DIE], [ORANGE_DIE, PINK_DIE]]); 
      expect(combinations1).toContainEqual([[PINK_DIE], [ORANGE_DIE, ORANGE_DIE, GREEN_DIE]]); 
      expect(combinations1).toContainEqual([[GREEN_DIE], [ORANGE_DIE, ORANGE_DIE, PINK_DIE]]);
    });
  
    test('returns all possible combinations of two teams for (orange, orange, pink, grey)', () => {
      const combinations2 = getAllDiceCombinations([ORANGE_DIE, ORANGE_DIE, PINK_DIE, GREY_DIE]);
      expect(combinations2).toContainEqual([[ORANGE_DIE], [ORANGE_DIE, PINK_DIE, GREY_DIE]]); 
      expect(combinations2).toContainEqual([[ORANGE_DIE, ORANGE_DIE], [PINK_DIE, GREY_DIE]]); 
      expect(combinations2).toContainEqual([[ORANGE_DIE, PINK_DIE], [ORANGE_DIE, GREY_DIE]]); 
      expect(combinations2).toContainEqual([[ORANGE_DIE, GREY_DIE], [ORANGE_DIE, PINK_DIE]]); 
      expect(combinations2).toContainEqual([[PINK_DIE], [ORANGE_DIE, ORANGE_DIE, GREY_DIE]]); 
      expect(combinations2).toContainEqual([[GREY_DIE], [ORANGE_DIE, ORANGE_DIE, PINK_DIE]]);
    });
  
    test('returns all possible combinations of two teams for (blue, blue)', () => {
      const combinations3 = getAllDiceCombinations([BLUE_DIE, BLUE_DIE]);
      expect(combinations3).toContainEqual([[BLUE_DIE], [BLUE_DIE]]);
    });
  });


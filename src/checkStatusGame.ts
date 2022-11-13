import { gameStatus } from "./model/gameStatus";
import { getFieldElementByCoords, field } from "./model/field";
import { needToWinElements } from "./model/defaultGameSettings";
import type { TCount } from "./types";

export const checkDraw = (elementsCount): boolean => {
  return elementsCount === needToWinElements * needToWinElements;
};

const checkLines = (x_current: number, y_current: number) => {
  let currentSymbol = getFieldElementByCoords(x_current, y_current, field);
  let maxCount: TCount = {
    h: 0,
    v: 0,
    d1: 0,
    d2: 0,
  };
  let count: TCount = {
    h: 0,
    v: 0,
    d1: 0,
    d2: 0,
  };

  for (let i = 0; i < needToWinElements * 2 - 1; i++) {
    let x = x_current - needToWinElements + i + 1;
    let y = y_current - needToWinElements + i + 1;

    if (currentSymbol === getFieldElementByCoords(x, y, field)) {
      count.d1 += 1;
      if (count.d1 > maxCount.d1) {
        maxCount.d1 = count.d1;
      }
    } else {
      count.d1 = 0;
    }
    if (currentSymbol === getFieldElementByCoords(x, y_current, field)) {
      count.h += 1;
      if (count.h > maxCount.h) {
        maxCount.h = count.h;
      }
    } else {
      count.h = 0;
    }
    if (currentSymbol === getFieldElementByCoords(x_current, y, field)) {
      count.v += 1;
      if (count.v > maxCount.v) {
        maxCount.v = count.v;
      }
    } else {
      count.v = 0;
    }
    if (
      currentSymbol ===
      getFieldElementByCoords(x, y_current + needToWinElements - i - 1, field)
    ) {
      count.d2 += 1;
      if (count.d2 > maxCount.d2) {
        maxCount.d2 = count.d2;
      }
    } else {
      count.d2 = 0;
    }
  }
  return maxCount;
};
export const checkOfVictory = (x: number, y: number) => {
  let res = checkLines(x, y);

  for (let lineValue in res) {
    if (res[lineValue] >= needToWinElements) {
      gameStatus.setGameStatus(true, getFieldElementByCoords(x, y, field));
      return;
    }
  }
};

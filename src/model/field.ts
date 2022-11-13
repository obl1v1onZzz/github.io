import { symbolsByTurn } from "./playerMove";
import { fieldSize } from "./defaultGameSettings";
export let field: string[][] = new Array(fieldSize)

  .fill(null)
  .map(() => new Array(fieldSize));

export let elementsCount = 0;

export const counterActiveElements = () => {
  elementsCount++;
};
export const setFieldElementByCoords = (
  x: number,
  y: number,
  player: string,
  field: string[][]
) => {
  if (!Object.keys(symbolsByTurn).includes(player)) {
    throw new Error("invalid Player");
  }
  field[x][y] = player;
};

export const getFieldElementByCoords = (
  x: number,
  y: number,
  field: string[][]
): string | null => {
  return field[x]?.[y] ?? null;
};

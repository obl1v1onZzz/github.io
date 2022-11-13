import { symbolsByTurn } from "./payerMove";
import { fieldSize } from "./defaultGameSettings";
export let field = new Array(fieldSize)
    .fill(null)
    .map(() => new Array(fieldSize));
export let elementsCount = 0;
export const counterActiveElements = () => {
    elementsCount++;
};
export const setFieldElementByCoords = (x, y, player, field) => {
    if (!Object.keys(symbolsByTurn).includes(player)) {
        throw new Error("invalid Player");
    }
    field[x][y] = player;
};
export const getFieldElementByCoords = (x, y, field) => {
    return field[x]?.[y] ?? null;
};
//# sourceMappingURL=field.js.map
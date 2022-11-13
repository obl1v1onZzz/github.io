import { UI } from "./ui";
import type { TCustomDivElement } from "./types";
import { getFieldElementByCoords, field } from "./model/field";
import { getSymbolByTurn } from "./model/payerMove";
import { fieldSize } from "./model/defaultGameSettings";
export const render = {
  draw() {
    UI.STATUS_GAME.innerHTML = "DRAW";
    UI.FIELD.innerHTML = "";
  },
  victory(winner: string | null) {
    UI.STATUS_GAME.innerHTML = "The winner is:" + winner;
  },
  field(currentPlayer: string) {
    UI.CURRENT_PLAYER.innerHTML = currentPlayer;
    const renderTarget = document.querySelector("section");
    renderTarget!.innerHTML = "";

    for (let x = 0; x < fieldSize; x++) {
      for (let y = 0; y < fieldSize; y++) {
        let div = document.createElement("div") as TCustomDivElement;
        let value = getFieldElementByCoords(x, y, field);
        if (value !== null) {
          div.innerHTML = getSymbolByTurn(value);
          div.className = "active";
        }
        div.isGameCell = true;
        div.cellX = x;
        div.cellY = y;
        div.field = field;
        renderTarget!.appendChild(div);
      }
    }
  },
};

import { render } from "./render";
import { alternateTurn, currentPlayer } from "./model/payerMove";
import {
  getFieldElementByCoords,
  setFieldElementByCoords,
  elementsCount,
  counterActiveElements,
} from "./model/field";
import { checkOfVictory } from "./checkStatusGame";
import { checkDraw } from "./checkStatusGame";
import { gameStatus } from "./model/gameStatus";
import type { TCustomEventTarget } from "./types";

document.addEventListener("click", function (obj) {
  let element = obj.target as TCustomEventTarget;
  if (
    !element.isGameCell ||
    getFieldElementByCoords(element.cellX, element.cellY, element.field) !==
      null
  )
    return;
  setFieldElementByCoords(
    element.cellX,
    element.cellY,
    currentPlayer,
    element.field
  );
  counterActiveElements();
  alternateTurn();
  render.field(currentPlayer);

  checkOfVictory(element.cellX, element.cellY);
  if (gameStatus.isOver) {
    render.victory(gameStatus.winner);
  }
  if (checkDraw(elementsCount)) {
    render.draw();
  }
});

render.field(currentPlayer);

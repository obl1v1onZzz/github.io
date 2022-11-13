import type { TsymbolsByTurn } from "../utils/types";

export const symbolsByTurn: TsymbolsByTurn = {
  "X move": "X",
  "O move": "O",
};

export const alternateTurn = () => {
  const players = Object.keys(symbolsByTurn);
  const playerIndex = players.indexOf(currentPlayer);
  if (playerIndex >= players.length - 1) return (currentPlayer = players[0]);
  return (currentPlayer = players[playerIndex + 1]);
};

export const getSymbolByTurn = (currentPlayer: string) => {
  return symbolsByTurn[currentPlayer] ?? Object.values(symbolsByTurn)[0];
};

export let currentPlayer = Object.keys(symbolsByTurn)[0];

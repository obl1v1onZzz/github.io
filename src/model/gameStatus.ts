import type { TGameStatus } from "../types";

export const gameStatus: TGameStatus = {
  isOver: false,
  winner: null,
  setGameStatus(status: boolean, winner: string | null) {
    this.isOver = status;
    this.winner = winner;
  },
};

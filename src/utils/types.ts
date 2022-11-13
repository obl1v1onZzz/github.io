export type TsymbolsByTurn = {
  [key: string]: string;
};
export type TCount = {
  [key: string]: number;
};
export type TGameStatus = {
  isOver: boolean;
  winner: string | null;
  setGameStatus: (status: boolean, winner: string | null) => void;
};
export type TCustomDivElement = HTMLDivElement & {
  isGameCell: boolean;
  cellX: number;
  cellY: number;
  field: string[][];
};

export type TCustomEventTarget = TCustomDivElement & EventTarget;

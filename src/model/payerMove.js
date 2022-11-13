export const symbolsByTurn = {
    "X move": "X",
    "O move": "O",
};
export const alternateTurn = () => {
    const players = Object.keys(symbolsByTurn);
    const playerIndex = players.indexOf(currentPlayer);
    if (playerIndex >= players.length - 1)
        return (currentPlayer = players[0]);
    return (currentPlayer = players[playerIndex + 1]);
};
export const getSymbolByTurn = (currentPlayer) => {
    return symbolsByTurn[currentPlayer] ?? Object.values(symbolsByTurn)[0];
};
export let currentPlayer = Object.keys(symbolsByTurn)[0];
//# sourceMappingURL=payerMove.js.map
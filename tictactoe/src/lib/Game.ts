export type Player ={
    name: 'X' | 'O';
    moves : number[];
}

export type Game = {
    board: number[];
    players: Player[];
    turn: number;
    winner: number;
}

export const initialGame: Game = {
    board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    players: [  
        { name: 'X', moves: [] },
        { name: 'O', moves: [] }
    ],
    turn: 0,
    winner: 0,
    
}

// Path: tictactoe\src\lib\Game.ts  
export const makeMove = (game: Game, position: number): Game => {
    const player = game.players[game.turn];
    const newBoard = [...game.board];
    newBoard[position] = game.turn + 1;
    const newPlayers = [...game.players];
    newPlayers[game.turn] = { ...player, moves: [...player.moves, position] };
    const newTurn = (game.turn + 1) % 2;
    const newWinner = checkWinner(newPlayers);
    return { ...game, board: newBoard, players: newPlayers, turn: newTurn, winner: newWinner };
}

// Path: tictactoe\src\lib\Game.ts
export const checkWinner = (players: Player[]): number => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        for (let j = 0; j < winningCombinations.length; j++) {
            const combination = winningCombinations[j];
            if (combination.every((position) => player.moves.includes(position))) {
                return i + 1;
            }
        }
    }
    return 0;
}

// Path: tictactoe\src\lib\Game.ts
export const checkDraw = (game: Game): boolean => {
    return game.board.every((position) => position !== 0);
}

// Path: tictactoe\src\lib\Game.ts
export const checkGameOver = (game: Game): boolean => {
    return game.winner !== 0 || checkDraw(game);
}

// Path: tictactoe\src\lib\Game.ts
export const getWinner = (game: Game): string => {
    if (game.winner === 0) {
        return 'Draw';
    }
    return game.players[game.winner - 1].name;
}   

// Path: tictactoe\src\lib\Game.ts

 
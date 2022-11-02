import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  checkDraw,
  checkGameOver,
  checkWinner,
  getWinner,
  initialGame,
  makeMove,
} from "./lib/Game";
import { Celarabtion } from "./Celarabtion";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const [player, setPlayer] = useState(0);
  const [game, setGame] = useState(initialGame);
  const [isFinished, setIsFinished] = useState(false);

  function nextTurn(postion: number) {
    if (game.winner == 0) {
      setGame(makeMove(game, postion));
    }
  }

  return (
    <div className="App">
        
       
        <div className="game-status">
        <span className="current-turn bg" >Tic tac toe</span>
          <div className="current-turn bg">
            {game.turn == 0 ? "X" : "O"} Turn
          </div>
          <div className="current-turn bg"> 10:50</div>
          <div className="game-button bg"> Restart</div>
        </div>
      
        <div className="borad">
        {checkGameOver(game) && <Celarabtion Winner={getWinner(game)} />}
          {game.board.map((row, index) => {
            return (
              <Card
                key={index}
                value={row}
                player={game.turn}
                nextTurn={() => {
                  nextTurn(index);
                }}
              />
            );
          })}
        </div>
    </div>
  );
}

export default App;

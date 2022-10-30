import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import confetti from "canvas-confetti";
import "./App.css";
import {
  checkDraw,
  checkGameOver,
  getWinner,
  initialGame,
  makeMove,
} from "./lib/Game";

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
      <div className="title bg">
        <h4>Tic tac toe</h4>{" "}
      </div>
      <div className="info bg">
        <div className="icon">5</div>
        <div className="text-box">
          <span> Status {game.winner != 0 ? "Finished" : "Playing"} </span>
          <span> Current Player: {game.turn}</span>
          <span>{checkGameOver(game) && getWinner(game)}</span>
        </div>
      </div>
      <div className="borad"  >
       { checkGameOver(game) && <Celarabtion Winner={getWinner(game)}></Celarabtion>}
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

      {/* <div className="game">
        <div className="game-board">
          <div className="row ">
            <Card value={1} player={player} nextTurn={nextTurn} />
            <Card value={2} player={player} nextTurn={nextTurn} />
            <Card value={3} player={player} nextTurn={nextTurn} />
          </div>
          <div className="row">
            <Card value={4} player={player} nextTurn={nextTurn} />
            <Card value={5} player={player} nextTurn={nextTurn} />
            <Card value={6} player={player} nextTurn={nextTurn} />
          </div>
          <div className="row">
            <Card value={7} player={player} nextTurn={nextTurn} />
            <Card value={8} player={player} nextTurn={nextTurn} />
            <Card value={9} player={player} nextTurn={nextTurn} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;

type Props = {
  value: number;
  player?: string | number;
  nextTurn?: any;
};

const Card = ({ player, nextTurn }: Props) => {
  const [value, setValue] = useState("");


  return (
    <a 
      
      onClick={() => {
        if (value == "") {
          setValue(player == 0 ? "X" : "O");
        }
        nextTurn();
      }}
      className={"card " + value + "-card  "}
       
    >
      <span>{value}</span>{" "}
    </a>
  );
};

import React from "react";

type WinerProps = {
  Winner: string;
};

export function Celarabtion({ Winner }: WinerProps) {


useEffect(() => {
  animate(Winner);
}, [Winner])


  async function  animate(team : string) {
   

    const random = (min : number, max : number) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const color = team == 'X' ? '7321DB' : 'FFAE12'

    const shoot = (angle : number, scalar : number) => {
        confetti({
            particleCount: random(5, 10),
            angle: random(angle - 5, angle + 5),
            spread: random(35, 55),
            startVelocity: random(35, 55),
            colors: ['#FFFFFF', color, color],
            scalar,
        })
    }

    for (let index = 0; index < 9; index++) {
        setTimeout(shoot, random(0, 200), index * 22.5, random(28, 32) / 10)

        setTimeout(
            shoot,
            random(100, 300),
            index * 22.5,
            random(18, 22) / 10,
        )
    }

  
 
 

    
}

  return (
    <div className="marque">
       
      <h4>Winer is {Winner}</h4>
      
     
    </div>
  );
}

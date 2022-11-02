import { useState } from "react";

type Props = {
    value: number;
    player?:number;
    nextTurn?: any;
    isHover?: boolean;
  };
  
  const Card = ({ player, nextTurn}: Props) => {
    const [value, setValue] = useState("");
    const [isShown, setIsShown] = useState(false);
    
  
    return (
      <a 
      
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
        onClick={() => {
          if (value == "") {
            setValue(player == 0 ? "X" : "O");
          }
          nextTurn();
        }}
        className={"card " + value + "-card" + (value ? " card-played" : "")}
         
      >
        {
            isShown && value =="" && <span className={player == 0 ? "x-image" : "o-image"}></span>
        }
         

        <span className="card-span ">{value}</span>
      </a>
    );
  };

  export default Card;
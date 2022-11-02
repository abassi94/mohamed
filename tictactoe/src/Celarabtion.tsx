import { useEffect } from "react";
import confetti from "canvas-confetti";

export type WinerProps = {
  Winner: string;
};
export function Celarabtion({ Winner }: WinerProps) {
  useEffect(() => {
    animate(Winner);
  }, [Winner]);

  async function animate(team: string) {
    const random = (min: number, max: number) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const color = team == "X" ? "7321DB" : "FFAE12";

    const shoot = (angle: number, scalar: number) => {
      confetti({
        particleCount: random(5, 10),
        angle: random(angle - 5, angle + 5),
        spread: random(35, 55),
        startVelocity: random(35, 55),
        colors: ["#FFFFFF", color, color],
        scalar,
      });
    };

    for (let index = 0; index < 9; index++) {
      setTimeout(shoot, random(0, 200), index * 22.5, random(28, 32) / 10);

      setTimeout(shoot, random(100, 300), index * 22.5, random(18, 22) / 10);
    }
  }

  return (
    <>
      <div className="marque">
        <div className="banner">
          <div className="banner-text">
            <span className="banner-text-span">Winner is {Winner}</span>
          </div>
          <div className="game-button"> Restart Game </div>
        </div>
      </div>
    </>
  );
}

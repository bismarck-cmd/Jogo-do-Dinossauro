import { isColliding } from "./isColliding.js";
import { createDino } from "./dino.js";
import { createScore } from "./score.js";
import { createCactu } from "./cactu.js"

export const createGame = (dinoElement, cactuElement, scoreElement) => {
    const dino = createDino(dinoElement);
    const cactu = createCactu(cactuElement);
    const score = createScore(scoreElement);
  
    score.start();

    let isGameOver = false;
  
    const setIsGameOver = (value) => {
      isGameOver = value;
      if (isGameOver) {
        dino.stop();
        score.stop();
        cactu.stop();
        clearInterval(checkCollisionInterval);
      }
    };
  
    const checkCollisionInterval = setInterval(() => {
      if (isColliding(dinoElement, cactuElement)) {
        setIsGameOver(true);
      }
    }, 40);
  };
  
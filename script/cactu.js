export const createCactu = (cactuElement) => {
    cactuElement.addEventListener("animationiteration", () => {
      const newClassList = cactuElement.className.replace(
        /cactu-[1,2,3]/gi,
        `cactu-${Math.floor(Math.random() * 3) + 1}`
      );
      cactuElement.className = newClassList;
    });
  
    const stop = () => {
        cactuElement.style.animationPlayState = "paused";
    };
  
    return { stop };
  };
  
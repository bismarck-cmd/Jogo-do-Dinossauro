export const createDino = (dinoElement) => {
    let isJumping = false;
  
    const jump = () => {
      if (isJumping) return;
      dinoElement.classList.add("jump");
      isJumping = true;
      setTimeout(() => {
          dinoElement.classList.remove("jump")
          isJumping = false;
      }, 400);
    };
  
    const handleJump = () => {
      jump();
    }

    document.addEventListener("keydown", handleJump);

    const stop = () => {
        document.removeEventListener("keydown", handleJump)
        dinoElement.className = "dead"
    }

    return { stop }
};
  
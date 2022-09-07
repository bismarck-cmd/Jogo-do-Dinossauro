export const createScore = (containerElement) => {
  let score = 0;
  let interval;

  const setScore = (value) => {
    score = value;
    containerElement.textContent = `${value}`.padStart(6,'0');
  };

  const start = () => {
    interval = setInterval(() => {
      setScore(score + 1);
    }, 10);
  };

  const stop = () => {
    clearInterval(interval);
  };

  const restart = () => {
    stop();
    setScore(0);
    start();
  };

  return {
    start,
    stop,
    restart,
  };
};
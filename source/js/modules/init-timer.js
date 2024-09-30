const initTimer = () => {
  const timer = document.querySelector('[data-timer]');

  if (!timer) {
    return;
  }

  const countdownTime = 30 * 60 * 1000;

  let endTime = new Date().getTime() + countdownTime;

  const timerInterval = setInterval(() => {
    let now = new Date().getTime();
    let distance = endTime - now;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML = '00:' + minutes + ':' + seconds;

    // If the countdown is finished, reset the timer
    if (distance < 0) {
      clearInterval(timerInterval);
      timer.innerHTML = ':30:00';
    }
  }, 1000);

};

export {initTimer};

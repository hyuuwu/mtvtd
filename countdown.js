function startCountdown() {
    const targetDate = new Date("October 24, 2024 00:00:00").getTime();
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      const countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "IT DROPPED.";
        window.location.href = "https://open.spotify.com/artist/6ioSe48zKczycCV21mHzmg"; // Uncomment this line to enable redirection
      }
    }, 1000);
  }
  
  startCountdown();
document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date("March 22, 2024 05:00:00").getTime();

    const countdownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const difference = targetDate - currentDate;

        const remainingTime = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };

        //const formattedTime = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;
        //countdownElement.innerHTML = formattedTime;
        const formattedTime = `${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;
        countdownElement.innerHTML = formattedTime;

        if (difference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = '¡Llegó la Hora!';
        }
    }, 1000);
});


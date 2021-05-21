const countdown = () => {
    const countDate = new Date("June 18,2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minuite = second * 60;
    const hour = minuite * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const texthour = Math.floor((gap % day) / hour);
    const textMinuite = Math.floor((gap % hour) / minuite);
    const textSecond = Math.floor((gap % minuite) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = texthour;
    document.querySelector(".minuite").innerText = textMinuite;
    document.querySelector(".second").innerText = textSecond;

};
setInterval(countdown, 1000);

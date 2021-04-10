
const refs = {
    clockfaceDays: document.querySelector('[data-value="days"]'),
    clockfaceHours: document.querySelector('[data-value="hours"]'),
    clockfaceMinutes: document.querySelector('[data-value="mins"]'),
    clockfaceSeconds: document.querySelector('[data-value="secs"]'),
    timerEventMessage: document.getElementById("timer-1"),
}

refs.timerEventMessage.insertAdjacentHTML('beforebegin', '<p class="event-description">Until the birthday of the beloved city of Odessa</p>')

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    };
    
    intervalId = setInterval(() => {
    const currentTime = Date.now();
    const timeLeft = this.targetDate - currentTime;
    const time = this.getTimeParts(timeLeft);
    this.updateClockface(time);
    this.timeIsUp(timeLeft)
    } ,1000);

 updateClockface({ days, hours, mins, secs }) {
    refs.clockfaceDays.textContent = `${days}`;
    refs.clockfaceHours.textContent = `${hours}`;
    refs.clockfaceMinutes.textContent = `${mins}`;
    refs.clockfaceSeconds.textContent = `${secs}`;
}

 pad(value) {
    return String(value).padStart(2, '0');
}

 getTimeParts (time) {
  
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs }
    
    }
    
 timeIsUp(timeLeft) {
     if (timeLeft < 0) {
         clearInterval(this.intervalId);
         refs.timerEventMessage.textContent = 'Happy Birthday Favorite Hero City Odessa';
         const timerEventDescription = document.querySelector('.event-description');
         timerEventDescription.remove();
     }
     return
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 02, 2021'),
});
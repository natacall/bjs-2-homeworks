'use strict'

class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error ('Параметр id не передан');
        }
        else if (this.alarmCollection.find(clock => clock.id === id)){
            return console.error('Будильник с таким id уже существует');
        }
        return this. alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        const start = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(call => call.id !== id);
        const end = this.alarmCollection.length;
        return start > end;
      }

    getCurrentFormattedTime(){
        return new Date().toTimeString().slice(0, 5); 
    }

    start() {
        const checkClock = (clock) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
              clock.callback();
            }
          }
        if (this.time === null) {
          this.time = setInterval(() => {
            this.alarmCollection.forEach(clock => checkClock.bind(clock));
          }, 1000);
        }
        return;
      }
    stop() {
        if (this.time !== null) {
            clearInterval(this.time);
            this.time = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(clock => console.log(`Будильник номер ${clock.id} заведен на ${clock.time}`));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
      
}
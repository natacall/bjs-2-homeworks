// тут вы можете вызывать функции из task.js
function testCase() {
    const phoneAlarm = new AlarmClock();
    phoneAlarm.addClock('08:00', () => console.log('Просыпайся'), 1);
    phoneAlarm.addClock('08:45', () => {console.log('Пора гулять'); phoneAlarm.removeClock(2)},2);
    phoneAlarm.addClock('08:55', () => console.log('Подъем'), 3);
    phoneAlarm.printAlarms();
    phoneAlarm.removeClock(3);
    phoneAlarm.removeClock(1);
    phoneAlarm.removeClock(2);
    phoneAlarm.printAlarms();
}
testCase();
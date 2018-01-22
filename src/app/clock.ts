// import { DigitalClock } from './digitalClock';

// export class Clock {
//   digitalClock;

//   // 延遲時間
//   DELAY = 1000;

//   // 時間常數單位
//   SECONDS_PER_MINUTE = 60;
//   MINUTES_PER_HOUR = 60;
//   HOURS_PER_DAY = 24;

//   // 要顯示的時分秒
//   hours: number;
//   minutes: number;
//   seconds: number;


//   constructor() {
//     this.digitalClock = new DigitalClock();

//     const date = new Date();
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();

//     this.timer();
//   }

//   timer() {
//     // 每一秒鐘執行 onTick 一次
//     setInterval(this.onTick, this.DELAY);
//   }


//   onTick = function() {
//     //this.checkSeconds();
//     console.log('onTick');
//     this.digitalClock.update(this.hours, this.minutes, this.seconds);
//   };

//   checkSeconds = function() {
//     if (this.seconds + 1 === this.SECONDS_PER_MINUTE ) {
//       this.seconds = 0;
//       this.checkMinutes();

//       //return;
//     }

//     this.seconds = this.seconds + 1;
//     //return;
//   };



//   checkMinutes = function() {
//     if (this.minutes + 1 === this.MINUTES_PER_HOUR ) {
//       this.minutes = 0;
//       this.checkHours();
//       return;
//     }

//     this.minutes = this.minutes + 1;
//     return;
//   };

//   checkHours = function() {
//     if (this.hours + 1 === this.HOURS_PER_DAY ) {
//       this.hours = 0;
//       return;
//     }

//     this.hours = this.hours + 1;
//     return;
//   };

// }

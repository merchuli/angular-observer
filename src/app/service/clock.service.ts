import { DigitalClockComponent } from './../digital-clock/digital-clock.component';
import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable()
export class ClockService implements OnInit {
  digitalClock;

  // 延遲時間
  DELAY = 1000;

  // 時間常數單位
  SECONDS_PER_MINUTE = 60;
  MINUTES_PER_HOUR = 60;
  HOURS_PER_DAY = 24;

  // 要顯示的時分秒
  hours: number;
  minutes: number;
  seconds: number;

  getSeconds = function() {
    return this.seconds;
  };

  constructor() {
    // this.digitalClock = new DigitalClockComponent();
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    console.log('constructor ' + this.seconds);

    this.timer();
  }

  ngOnInit() {
  }

  timer() {
    // 每一秒鐘執行 onTick 一次
    console.log('timer');
    setInterval(this.onTick, this.DELAY);
  }


  onTick = function() {
    const date = new Date();
    let hours = <number>date.getHours();
    let minutes = <number>date.getMinutes();
    let seconds = <number>date.getSeconds();

    if ((seconds + 1) === this.SECONDS_PER_MINUTE ) {
      seconds = 0;
      if ((minutes + 1) === this.MINUTES_PER_HOUR ) {
        minutes = 0;
        if ((hours + 1) === this.HOURS_PER_DAY ) {
          hours = 0;
        } else {
          hours = hours + 1;
        }
      } else {
        minutes = minutes + 1;
      }
    } else {
      seconds = seconds + 1;
    }
    console.log('onTick');
    console.log('onTick: ' + seconds);
    console.log(hours + ' : ' + minutes + ' : ' + seconds);

    // this.digitalClock.update(hours, minutes, seconds);
  };


}

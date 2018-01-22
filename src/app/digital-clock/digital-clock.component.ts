import { ClockService } from './../service/clock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  // clockService;

  hours: number;
  minutes: number;
  seconds: number;

  constructor(private clockService: ClockService) {
    //this.clockService = new ClockService();
  }

  ngOnInit() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  // 接收 Clock 傳過來的時分秒，並顯示在螢幕上
  update(hours: number, minutes: number, seconds: number): void {
    this.hours = this.clockService.hours;
    this.minutes = this.clockService.minutes;
    this.seconds = this.clockService.seconds;
    console.log('update');
  }

}

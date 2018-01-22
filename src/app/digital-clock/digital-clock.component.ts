import { ClockService } from './../service/clock.service';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ObserverInterface } from '../interface/observer.interface';
import { SubjectInterfaceToken } from '../interface/injection-token';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})

export class DigitalClockComponent implements ObserverInterface, OnInit, OnDestroy {
  now: Date;

  constructor(
    @Inject(SubjectInterfaceToken)
    private clockService: ClockService) {
  }

  ngOnInit(): void {
    this.clockService.addObserver(this);
  }

  ngOnDestroy(): void {
    this.clockService.removeObserver(this);
  }

  // 接收 Clock 傳過來的時分秒，並顯示在螢幕上
  update(date: Date): void {
    this.now = date;
  }
}

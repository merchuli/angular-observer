import { Injectable } from '@angular/core';
import { SubjectInterface } from './../interface/subject.interface';
import { ObserverInterface } from '../interface/observer.interface';

@Injectable()
export class ClockService implements SubjectInterface {
  private observers: ObserverInterface[] = [];

  /** 延遲時間 */
  DELAY = 1000;

  constructor() {
    this.timer();
  }

  timer() {
    // 每一秒鐘執行 onTick 一次
    setInterval(() => this.tick(), this.DELAY);
  }

  addObserver(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  removeObserver(observer: ObserverInterface): void {
    const index = this.observers.indexOf(observer);

    if (index === -1) {
      return;
    }

    this.observers.splice(index, 1);
  }

  private tick(): void {
    this.observers.forEach(
      observer => observer.update(new Date())
    );
  }
}

import { ClockService } from './service/clock.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';


@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ClockService } from './service/clock.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { SubjectInterfaceToken } from './interface/injection-token';


@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClockService,
    {provide: SubjectInterfaceToken, useExisting: ClockService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

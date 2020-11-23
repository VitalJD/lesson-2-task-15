import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstModule } from './first/first.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

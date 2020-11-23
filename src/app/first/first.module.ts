import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second/second.component';
import { SecondModule } from './second/second.module';



@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    SecondModule
  ]
})
export class FirstModule { }

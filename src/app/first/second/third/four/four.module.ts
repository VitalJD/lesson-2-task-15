import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveModule } from './five/five.module';
import { SecondComponent } from '../../second.component';
import { FourComponent } from './four.component';
import { ThirdComponent } from '../third.component';
import { FirstComponent } from '../../first/first.component';
import { FiveComponent } from './five/five.component';



@NgModule({
  declarations: [
    FourComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FiveComponent
  ],
  imports: [
    CommonModule,
    FiveModule
  ]
})
export class FourModule { }

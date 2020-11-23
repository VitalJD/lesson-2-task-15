import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second.component';
import { FourComponent } from './four/four.component';
import { FourModule } from './four/four.module';



@NgModule({
  declarations: [
    ThirdComponent,
    FirstComponent,
    SecondComponent,
    FourComponent
  ],
  imports: [
    CommonModule,
    FourModule
  ]
})
export class ThirdModule { }

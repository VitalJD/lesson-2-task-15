import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { ThirdModule } from './third/third.module';



@NgModule({
  declarations: [
    SecondComponent,
    FirstComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    ThirdModule
  ]
})
export class SecondModule { }

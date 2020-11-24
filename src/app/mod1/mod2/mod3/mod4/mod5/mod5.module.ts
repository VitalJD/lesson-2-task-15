import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod5Component } from './mod5.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';



@NgModule({
  declarations: [
    Mod5Component, 
    Com1Component, 
    Com2Component, 
    Com3Component, 
    Com4Component],
  imports: [
    CommonModule
  ]
})
export class Mod5Module { }

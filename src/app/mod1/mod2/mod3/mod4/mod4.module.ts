import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod4Component } from './mod4.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Mod5Module } from './mod5/mod5.module';



@NgModule({
  declarations: [
    Mod4Component, 
    Com1Component, 
    Com2Component, 
    Com3Component],
  imports: [
    CommonModule,
    Mod5Module
  ]
})
export class Mod4Module { }

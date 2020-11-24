import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod3Component } from './mod3.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Mod4Module } from './mod4/mod4.module';



@NgModule({
  declarations: [
    Mod3Component,
    Com1Component,
    Com2Component
  ],
  imports: [
    CommonModule,
    Mod4Module
  ]
})
export class Mod3Module { }

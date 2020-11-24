import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Component } from './mod2.component';
import { Com1Component } from './com1/com1.component';
import { Mod3Module } from './mod3/mod3.module';




@NgModule({
  declarations: [
    Mod2Component, 
    Com1Component],
  imports: [
    CommonModule,
    Mod3Module
  ]
})
export class Mod2Module { }

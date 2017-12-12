import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './components/no-page/no-page.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [NoPageComponent],
  
  exports: [
    CommonModule
  ]
})
export class SharedModule { }

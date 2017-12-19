import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './components/no-page/no-page.component';
import { TrancatePipe } from './Pipes/text.trancate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    NoPageComponent,
    TrancatePipe
  ],
  
  exports: [
    CommonModule,
    TrancatePipe
  ]
})
export class SharedModule { }

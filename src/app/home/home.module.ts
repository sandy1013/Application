import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ListHoverDirective } from './dashboard/list-hover.directive';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, DashboardComponent, AboutComponent, ListHoverDirective]
})
export class HomeModule { }

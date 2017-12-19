import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CanComponentDeactivate } from '../../shared/Gaurds/home.deactivate.gaurd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, CanComponentDeactivate {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.data.subscribe((data: Data) => {
        console.log(data);
      });
  }

  canDeactivate() {
    return true;
  }

}

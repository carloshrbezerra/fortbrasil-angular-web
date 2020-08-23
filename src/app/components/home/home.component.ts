import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/global/services/shared.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shared: SharedService;

  constructor() {
    this.shared = SharedService.getInstance();
    this.shared.showTemplate.emit(true);
  }

  ngOnInit() {

  }

}

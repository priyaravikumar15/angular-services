import { Component } from '@angular/core';
import { MainServices } from './main.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  arrlist = [];
  updatelist = [];
  constructor(public mservice:MainServices){
    this.arrlist = this.mservice.getarraylist();
  }
  edit(){
    
  }
}

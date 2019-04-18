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
  updatelist:any = [];
  update = [];

  constructor(public mservice:MainServices){
    this.arrlist = this.mservice.getarraylist();
  }
  edit(newarraylist){
   this.update = this.mservice.getedit(newarraylist);
  // return this.updatelist =  newarraylist;
    //this.mservice.updatearraylist(this.updatelist);
  }
  addingitems(i,e,p){
    this.updatelist = this.mservice.updatearraylist( i,e,p );
  }
}

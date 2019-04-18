import { Injectable } from '@angular/core';

@Injectable()

export class MainServices{

constructor(){}

addarraylist = [
      {id:'001',email:'adbc@gmail.com',password:'adbc123'},
      {id:'002',email:'efgs@gmail.com',password:'efgs123'}
  ];

getarraylist(){
    return this.addarraylist;
}
}
import { Injectable } from '@angular/core';

@Injectable()
export class users{
  id:string;
  email:string;
  password:string;
}
export class MainServices{

constructor(){}

addarraylist:any [] = [
      {id:'001',email:'adbc@gmail.com',password:'adbc123'},
      {id:'002',email:'efgs@gmail.com',password:'efgs123'}
  ];
editaddarraylist = [];
restedit = [];
getarraylist(){
    return this.addarraylist;
}
updatearraylist(i,e,p){
  //console.log( this.newarraylist );
  this.addarraylist.push( i,e,p );
  return this.addarraylist;
  //console.log(JSON.stringify( this.editaddarraylist ));
  //this.addarraylist = newarraylist;
  //console.log("Service entry" + this.addarraylist);
}
getedit(newarraylist){
    console.log(newarraylist);
    return this.restedit = newarraylist;
    console.log(this.restedit);
}
}
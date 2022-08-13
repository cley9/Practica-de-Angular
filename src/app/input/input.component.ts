import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
// ----- variable
// num1: number;
// num2: number;
// total: number; 
num1="";
num2="";
total: number;
title: string="";
    // console.log("date "this.title);
    
  constructor() {
    //   this.num1=22;
    //   this.num2=2;
      this.total=0;
  }
 suma(){
    // this.total=this.num1+this.num2;
    this.total=parseInt(this.num1)+parseInt(this.num2);
 }
  ngOnInit(): void {
  }
// log(title){
//     console.log(title);

// }
}

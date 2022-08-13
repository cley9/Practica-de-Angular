import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
// --------- declarar un input
menu: string ='';
name: string ='cley';
cod="";
miDate(){
  alert(this.menu);
}
  constructor() { }

  ngOnInit(): void {
  }

}

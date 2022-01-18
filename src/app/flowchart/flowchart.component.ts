import { Component, OnInit } from '@angular/core';
//import { geometry, Image, Surface, Path, Text, Group } from '@progress/kendo-drawing';
//const { Rect, Point, Size, transform } = geometry;
// import {MatButtonToggleChange} from '@angular/material/button-toggle';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})
export class FlowchartComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): boolean {
   
return this.updateVal();
    }
    
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 3, color: 'blue'},
    {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Four', cols: 2, rows: 1, color: 'blue'},
  ];

updateVal(){
  if (this.val1 == true){
    return this.val3=false;
  }else if( this.val1 == false){
    return this.val3=true
  }  
  // if(this.val1==false){
  //   return this.val3=true
  // }
}

  // status: string;
  // enableDisableRule2() {
  //   if(this.val2==true){
  //     return this.status=true
  //   }else if(this.val2==false){
  //     return this.status=false
  //   }
  // } 

  val1:boolean = true; 
  val2:boolean = true;
  val3:boolean = false;  
  
  getClassOfVal1(val1) {
    if (val1 == false) {
      return 'valve_img_red';
    } else if (val1 ==true) {
      return 'valve_img';
    } 
  }

  getClassOfVal2(val2) {
    if (val2 == false) {
      return 'valve_img_red';
    } else if (val2 ==true) {
      return 'valve_img';
    } 
    
  }

  getClassOfVal3(val3) {
    if (val3 == false) {
      return 'valve_img_red_2';
    } else if (val3 ==true) {
      return 'valve_img_2';
    } 
  }

  getval1(val1){
    if(val1==true){
      return 100;
    }
    else if(val1==false){
      return 0;
    }
  }

  getval2(val2){
    if(val2==true){
      return 100;
    }
    else if(val2==false){
      return 0;
    }
  }

  getval3(val3){
    if(val3==true){
      return 100;
    }
    else if(val3==false){
      return 0;
    }
  }

  // toggleView(change: MatButtonToggleChange){
  //   this.toggle = change.value;
  // }
}

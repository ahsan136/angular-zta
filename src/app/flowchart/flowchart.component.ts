import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit(){

  }

  val1:boolean = true; 
  val2:boolean = true; 
  val3:boolean = true; 

  onLeakDetected(value){
    this.openLeakModal();

    this.val1 = false;
    this.val3 = true;
    return this.val2=true
  }

  onNetworkSwitch(value){
    this.val1 = false;
    this.val2 = false;
    this.val3 = false;

    this.openNetworkModal();

    setTimeout(this.resetSystem, 4000);
  }

  resetSystem(){
    this.val1 = true;
    this.val2 = true;
    this.val3 = true;
    console.log("4 sec");
  }

  onBadActor(value){
    this.openBadActorModal();
    this.val1 = true;
    this.val3 = true;
    return this.val2=false
  }
  
  openLeakModal() {
    this.dialog.open(ModalDataDialog, {
      data: {
        error: 'Leak discovered.',
        message: 'Rerouted water flow ',
      },
    });
  }

  openNetworkModal() {
    this.dialog.open(ModalDataDialog, {
      data: {
        error: 'Network failure.',
        message: 'Switched network connection from terrestrial to space ',
      },
    });
  }

  openBadActorModal() {
    this.dialog.open(ModalDataDialog, {
      data: {
        error: 'Bad actor recognized.',
        message: 'The infiltrated valve was blocked and the flow was redirected ',
      },
    });
  }

  getval1(){
    if(this.val1==true){
      return 100;
    }
    else if(this.val1==false){
      return 0;
    }
  }

  getval2(){
    if(this.val2==true){
      return 100;
    }
    else if(this.val2==false){
      return 0;
    }
  }

  getval3(){
    if(this.val3==true){
      return 100;
    }
    else if(this.val3==false){
      return 0;
    }
  }

}

export interface ModalData {
  error: "";
  message: "";
}

@Component({
  selector: 'modal-data-dialog',
  templateUrl: 'popupmodal.html'
})
export class ModalDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData) {}
}
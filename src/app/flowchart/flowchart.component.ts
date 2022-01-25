import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as delay from 'delay';

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

  verticalSatCom:string = "none";
  verticalWANcom:string = "good";
  horizontalSatCom:string = "none";
  horizontalWANcom:string = "good";
  networkPhaseNum = 1;



  // leak detected 

  onLeakDetected(value){
    // this.openLeakModal();
    this.verticalSatCom = "none";
    this.verticalWANcom = "good";
    this.horizontalSatCom = "none";
    this.horizontalWANcom = "good";
    this.networkPhaseNum = 1;
    this.val1 = true;
    this.val3 = true;
    this.val2 = true
    
    this.fixLeak();
  }

  async fixLeak() {
    try {
      await new Promise(f => {
        setTimeout(f, 1000);
      });

      this.val1 = false;

    } catch (error) {
      console.error(error);
    } finally {
      console.log("Waited 1 second");
    }
  }

  openLeakModal() {
    this.dialog.open(ModalDataDialog, {
      data: {
        error: 'Leak discovered.',
        message: 'Rerouted water flow ',
      },
    });
  }



  // network switch

  onNetworkSwitch(value){
    this.val1 = false;
    this.val2 = false;
    this.val3 = false;
    // may change later 

    this.networkPhaseNum = 1;
    this.networkFailure();
  }

  async networkFailure() {
    try {
      await new Promise(f => {
        setTimeout(f, 2000);
      });

      this.verticalWANcom = "bad";
      this.networkPhaseNum = 1;
      this.switchToSatCom();

    } catch (error) {
      console.error(error);
    } finally {
      console.log("Waited 2 seconds");
    }
  }

  async switchToSatCom() {
    try {
      await new Promise(f => {
        setTimeout(f, 4000);
      });

      this.verticalSatCom = "good";
      this.networkPhaseNum = 2;
      this.switchAllToSatCom();

    } catch (error) {
      console.error(error);
    } finally {
      console.log("Waited 4 seconds");
    }
  }

  async switchAllToSatCom() {
    try {
      await new Promise(f => {
        setTimeout(f, 4000);
      });

      this.horizontalSatCom = "good";
      this.horizontalWANcom = "none";
      this.networkPhaseNum = 3;

    } catch (error) {
      console.error(error);
    } finally {
      console.log("Waited 4 seconds");
    }
  }



  // bad actor 

  onBadActor(value){
    // this.openBadActorModal();

    this.verticalSatCom = "none";
    this.verticalWANcom = "good";
    this.horizontalSatCom = "none";
    this.horizontalWANcom = "good";
    this.networkPhaseNum = 1;
    this.val1 = true;
    this.val2 = true;
    this.val3 = true;

    this.blockBadActor();
  }

  async blockBadActor() {
    try {
      await new Promise(f => {
        setTimeout(f, 1000);
      });

      this.val2 = false

    } catch (error) {
      console.error(error);
    } finally {
      console.log("Waited 1 second");
    }
  }

  openBadActorModal() {
    this.dialog.open(ModalDataDialog, {
      data: {
        error: 'Bad actor recognized.',
        message: 'The infiltrated valve was blocked and the flow was redirected ',
      },
    });
  }



  // getters 

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

  getVerticalSatelliteConnection(){
    if(this.verticalSatCom == "good"){
      return "vertical-good-connection"
    }
    else if (this.verticalSatCom == "bad"){ 
      return "vertical-bad-connection"
    } else {
      return "vertical-no-connection"
    }
  }

  getVerticalWANConnection(){
    if(this.verticalWANcom == "good"){
      return "vertical-good-connection"
    }
    else if (this.verticalWANcom == "bad"){ 
      return "vertical-bad-connection"
    }
  }

  getHorizontalSatelliteConnection(){
    if(this.horizontalSatCom == "good"){
      return "horizontal-good-connection horizontal-dotted-line"
    }
    else if (this.horizontalSatCom == "bad"){ 
      return "horizontal-bad-connection horizontal-dotted-line"
    } else {
      return "horizontal-no-connection horizontal-dotted-line"
    }
  }

  getHorizontalWANConnection(){
    if(this.horizontalWANcom == "good"){
      return "horizontal-good-connection horizontal-solid-line"
    }
    else if (this.horizontalWANcom == "bad"){ 
      return "horizontal-bad-connection horizontal-solid-line"
    } else {
      return "horizontal-no-connection horizontal-solid-line"
    }
  }

  getNetworkPhase() {
    return this.networkPhaseNum;
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
import { Component, OnInit } from '@angular/core';
import {
  MatButtonToggleModule
} from '@angular/material/button-toggle';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zta';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
      // here we want to listen to an event from the socket.io server
      // this.webSocketService.listen('test event').subscribe((data) => {
      //   console.log(data);
      // })
      
  }
}

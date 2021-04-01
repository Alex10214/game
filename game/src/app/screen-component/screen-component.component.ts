import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {EVENT, STATUS_ONE_SQUARE} from '../interface';

@Component({
  selector: 'app-screen-component',
  templateUrl: './screen-component.component.html',
  styleUrls: ['./screen-component.component.scss']
})
export class ScreenComponentComponent implements OnInit {

  STATUS_ONE_SQUARE = STATUS_ONE_SQUARE;
  timeRoundInput;
  public isShowPopup = false;

  constructor(public serviceGame: ServiceService) { }

  ngOnInit(): void {
    this.serviceGame.gameEvents$.subscribe((e: EVENT) => {
      console.log(e);
      if (e === EVENT.GAME_FINISHED) {
        this.isShowPopup = true;
      }
    });
  }

  start(): void {
    const options = {
      roundInterval: this.timeRoundInput,
      xSize: 10,
      ySize: 10,
      winCount: 10
    };
    this.serviceGame.createNewGame(options);
  }

  closePopup(): void {
    this.isShowPopup = false;
  }
}

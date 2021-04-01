import { Injectable } from '@angular/core';
import {EVENT, Score, STATUS_ONE_SQUARE} from '../interface';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  map: STATUS_ONE_SQUARE [] [];
  Score: Score;
  roundInterval: number;
  winCount: number;
  randomPosition: {x: number; y: number };
  roundTimeout;

  gameEvents$ = new Subject<EVENT>();


  constructor() {
    this.map = this.createGameMap(10, 10); // просто начальная отрисовка
    this.Score = {
      winner: null,
      userCount: 0,
      pcCount: 0,
    };
  }

  createGameMap(x: number, y: number): STATUS_ONE_SQUARE [] [] {
    const ar = [];
    for (let i = 0; i < x; i++) {
      ar.push(new Array(y).fill(STATUS_ONE_SQUARE.FREE));
    }
    return ar;
  }

  createNewGame(options: { winCount: number; roundInterval: number; xSize: number; ySize: number }): void {
    this.map = this.createGameMap(options.xSize, options.ySize);
    this.roundInterval = options.roundInterval;
    this.winCount = options.winCount;

    this.Score = {
      winner: null,
      userCount: 0,
      pcCount: 0,
    };
    this.startRound();
  }

   startRound(): void {
    this.randomNumberFunc(this.map);

    this.gameEvents$.next(EVENT.NEW_ROUND);

    this.roundTimeout = setTimeout(() => {
      this.action( this.randomPosition.x, this.randomPosition.y, STATUS_ONE_SQUARE.PC );
    }, this.roundInterval);
  }

  randomNumberFunc(map: STATUS_ONE_SQUARE [] []): void {
    const unitNum = map.length * map[0].length;

    const randomNum = Math.floor(Math.random() * unitNum);

    this.randomPosition = this.getRandomPosition(randomNum, map);
  }

  private getRandomPosition(randomNum: number, map: STATUS_ONE_SQUARE[][]): any {
    let res;
    do {
      res = this.funcPositionXY( randomNum, map[0].length);
      randomNum++;
      if (randomNum >= (map.length * map[0].length)) {
        randomNum = 0;
      }
    } while (map[res.x][res.y] !== STATUS_ONE_SQUARE.FREE);
    return res;
  }

  funcPositionXY(randomNum: number, length: number): any {
       const x =  Math.trunc(randomNum / length);
       const y = randomNum - (length * x);
       return{x, y};
    }

  action(x: number, y: number, player: STATUS_ONE_SQUARE): void {
    if (x !== this.randomPosition.x || y !== this.randomPosition.y) {
      return;
    }
    clearTimeout(this.roundTimeout);
    this.map[x][y] = player;
    this.updateStatus(player);
    this.Score.winner = this.checkWinner(this.Score, this.winCount);

    if (this.Score.winner) {
      this.gameEvents$.next(EVENT.GAME_FINISHED);
      return;
    }
    this.startRound();
  }

  updateStatus(player: STATUS_ONE_SQUARE): void {
    if (player === STATUS_ONE_SQUARE.USER) {
      this.Score.userCount++;
    }
    if (player === STATUS_ONE_SQUARE.PC) {
      this.Score.pcCount++;
    }
  }

  checkWinner( resWin: Score, winCount: number): STATUS_ONE_SQUARE.USER | STATUS_ONE_SQUARE.PC {
    if (resWin.userCount >= winCount) {
      return STATUS_ONE_SQUARE.USER;
    }
    if (resWin.pcCount >= winCount) {
      return STATUS_ONE_SQUARE.PC;
    }
    console.log(resWin);
    return null;
  }
}


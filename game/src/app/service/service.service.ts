import { Injectable } from '@angular/core';
import {EVENT, STATUS_ONE_SQUARE} from '../interface';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  map: STATUS_ONE_SQUARE [] [];
  gameScore: { pcCount: number; winner: null; userCount: number };

  /*public gameEvents$ = new Subject<EVENT>();*/

  constructor() {
    this.map = this.createGameMap(10, 10);
    this.gameScore = {
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
    console.log(ar);
    return ar;
  }
}


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

  constructor(public serviceGame: ServiceService) { }

  ngOnInit(): void {
  }

  createNewMap(): void {

  }
}

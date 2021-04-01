import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {STATUS_ONE_SQUARE} from '../interface';

@Component({
  selector: 'app-popup-result',
  templateUrl: './popup-result.component.html',
  styleUrls: ['./popup-result.component.scss']
})
export class PopupResultComponent implements OnInit {
  STATUS_ONE_SQUARE = STATUS_ONE_SQUARE;
  // tslint:disable-next-line:no-output-native
  @Output() close: EventEmitter<any> = new EventEmitter<any>();


  constructor(public serviceGame: ServiceService) { }

  ngOnInit(): void {
  }

}

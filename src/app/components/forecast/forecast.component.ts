import { Component, Input, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  // @Input() coordinates!: Coordinates; TODO
  @Input() coordinates!: any;

  constructor() { }

  ngOnInit(): void {
    console.log('in forecast')
  }

}

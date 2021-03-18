import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  showLoader = true; // TODO: use it
  unitList = [{
    name: 'Standard',
    value: 'standard'
  },
  {
    name: 'Metric',
    value: 'metric'
  }, {
    name: 'Imperial',
    value: 'imperial'
  }];
  unitControl = new FormControl(this.unitList[0].value);

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void { }
}

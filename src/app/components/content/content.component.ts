import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Unit } from 'src/app/enums/global.enum';
import { UnitSelectorService } from 'src/app/services/unit-selector.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
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
  unitControl = new FormControl(this.unitList[1].value); // select default unit as metric
  showLoader = true; // TODO: use it
  private unsubscribe$ = new Subject();

  constructor(private unitSelectorService: UnitSelectorService) { }

  ngOnInit(): void {
    this.unitControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((selectedUnit: Unit) => this.unitSelectorService.emitUnitChange(selectedUnit));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Unit } from 'src/app/enums/global.enum';
import { GlobalConstants } from 'src/app/global-constants';
import { UnitSelectorService } from 'src/app/services/unit-selector.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  unitList = GlobalConstants.unitList;
  unitControl = new FormControl(this.unitList[1].value); // to select default unit as metric
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

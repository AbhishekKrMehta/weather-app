import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unit } from '../enums/global.enum';

@Injectable({
  providedIn: 'root'
})
export class UnitSelectorService {

  constructor() { }

  private unitSource$ = new BehaviorSubject(Unit.metric);
  selectedUnit$ = this.unitSource$.asObservable();

  public emitUnitChange(selectedUnit: Unit): void {
    this.unitSource$.next(selectedUnit);
  }

}

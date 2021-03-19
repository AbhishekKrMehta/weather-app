import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Unit } from '../enums/global.enum';

import { UnitSelectorService } from './unit-selector.service';

describe('UnitSelectorService', () => {
  let service: UnitSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the right value when emitUnitChange() is called', done => {
    const emitUnitChangeSpy = spyOn(service, 'emitUnitChange').and.callThrough();
    service.emitUnitChange(Unit.standard);
    expect(emitUnitChangeSpy).toHaveBeenCalledOnceWith(Unit.standard);

    // To test observable
    const selectedUnit$ = service.selectedUnit$;
    selectedUnit$.subscribe(selectedUnit => {
      expect(selectedUnit).toBe(Unit.standard);
      done();
    });
  });
});

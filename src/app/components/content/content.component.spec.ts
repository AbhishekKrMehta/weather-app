import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Unit } from 'src/app/enums/global.enum';
import { GlobalConstants } from 'src/app/global-constants';
import { UnitSelectorService } from 'src/app/services/unit-selector.service';

import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let unitSelectorService: UnitSelectorService;

  const MockUnitSelectorService = {
    emitUnitChange(): void {
      return undefined;
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentComponent],
      providers: [
        { provide: UnitSelectorService, useValue: MockUnitSelectorService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    unitSelectorService = TestBed.inject(UnitSelectorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct value of selected unit when it changes', () => {
    spyOn(unitSelectorService, 'emitUnitChange').and.callThrough();
    component.ngOnInit();
    component.unitControl.setValue(GlobalConstants.unitList[2].value);
    expect(unitSelectorService.emitUnitChange).toHaveBeenCalledWith(Unit.imperial);
  });
});

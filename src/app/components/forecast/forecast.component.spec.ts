import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { of } from 'rxjs';
import { Unit } from 'src/app/enums/global.enum';
import { mockHourlyForecastResponse } from 'src/app/mock-data';
import { UnitSelectorService } from 'src/app/services/unit-selector.service';
import { WeatherDataService } from 'src/app/services/weather-data.service';

import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  const mockUnitSelectorService = {
    selectedUnit$: of(Unit.metric),
  };

  const mockWeatherDataService = {
    getHourlyWeatherData: () => of(mockHourlyForecastResponse),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      imports: [HttpClientTestingModule, MatTableModule],
      providers: [
        { provide: UnitSelectorService, useValue: mockUnitSelectorService },
        { provide: WeatherDataService, useValue: mockWeatherDataService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    component.coordinates = { latitude: 1, longitude: 2 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should set the correct values based on getHourlyWeatherData()', () => {
  //   component.ngOnInit();
  //   expect(component.tableData.dataSource.data).toEqual(mockHourlyForecastMapped);
  //   expect(component.temperatureUnit).toEqual(TemperatureUnits.metric);
  //   expect(component.windStrengthUnit).toEqual(WindStrengthUnits.metric);
  //   expect(component.showSpinner).toEqual(false);
  // });
});

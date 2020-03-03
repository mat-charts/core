import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChartComponent } from './mat-chart.component';

describe('MatChartComponent', () => {
  let component: MatChartComponent;
  let fixture: ComponentFixture<MatChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

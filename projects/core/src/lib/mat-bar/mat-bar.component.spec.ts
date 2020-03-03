import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBarComponent } from './mat-bar.component';

describe('MatBarComponent', () => {
  let component: MatBarComponent;
  let fixture: ComponentFixture<MatBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

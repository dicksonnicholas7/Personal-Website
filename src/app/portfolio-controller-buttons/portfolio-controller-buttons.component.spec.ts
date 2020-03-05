import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioControllerButtonsComponent } from './portfolio-controller-buttons.component';

describe('PortfolioControllerButtonsComponent', () => {
  let component: PortfolioControllerButtonsComponent;
  let fixture: ComponentFixture<PortfolioControllerButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioControllerButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioControllerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

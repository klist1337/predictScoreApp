import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BresileiroSeriaStandingComponent } from './bresileiro-seria-standing.component';

describe('BresileiroSeriaStandingComponent', () => {
  let component: BresileiroSeriaStandingComponent;
  let fixture: ComponentFixture<BresileiroSeriaStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BresileiroSeriaStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BresileiroSeriaStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

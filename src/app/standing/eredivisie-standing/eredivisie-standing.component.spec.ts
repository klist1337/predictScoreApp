import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EredivisieStandingComponent } from './eredivisie-standing.component';

describe('EredivisieStandingComponent', () => {
  let component: EredivisieStandingComponent;
  let fixture: ComponentFixture<EredivisieStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EredivisieStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EredivisieStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

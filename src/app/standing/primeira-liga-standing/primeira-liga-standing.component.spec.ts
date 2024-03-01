import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraLigaStandingComponent } from './primeira-liga-standing.component';

describe('PrimeiraLigaStandingComponent', () => {
  let component: PrimeiraLigaStandingComponent;
  let fixture: ComponentFixture<PrimeiraLigaStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeiraLigaStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeiraLigaStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligue1StandingComponent } from './ligue1-standing.component';

describe('Ligue1StandingComponent', () => {
  let component: Ligue1StandingComponent;
  let fixture: ComponentFixture<Ligue1StandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ligue1StandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ligue1StandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

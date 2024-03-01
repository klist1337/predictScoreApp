import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipStandingComponent } from './championship-standing.component';

describe('ChampionshipStandingComponent', () => {
  let component: ChampionshipStandingComponent;
  let fixture: ComponentFixture<ChampionshipStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChampionshipStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampionshipStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

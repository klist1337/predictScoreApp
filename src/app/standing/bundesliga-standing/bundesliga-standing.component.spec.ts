import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundesligaStandingComponent } from './bundesliga-standing.component';

describe('BundesligaStandingComponent', () => {
  let component: BundesligaStandingComponent;
  let fixture: ComponentFixture<BundesligaStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BundesligaStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BundesligaStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

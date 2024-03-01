import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaStandingComponent } from './liga-standing.component';

describe('LigaStandingComponent', () => {
  let component: LigaStandingComponent;
  let fixture: ComponentFixture<LigaStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LigaStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LigaStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

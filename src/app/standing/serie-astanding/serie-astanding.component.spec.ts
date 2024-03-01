import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieAStandingComponent } from './serie-astanding.component';

describe('SerieAStandingComponent', () => {
  let component: SerieAStandingComponent;
  let fixture: ComponentFixture<SerieAStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerieAStandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerieAStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

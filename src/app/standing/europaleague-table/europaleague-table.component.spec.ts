import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaleagueTableComponent } from './europaleague-table.component';

describe('EuropaleagueTableComponent', () => {
  let component: EuropaleagueTableComponent;
  let fixture: ComponentFixture<EuropaleagueTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EuropaleagueTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EuropaleagueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

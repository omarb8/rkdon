import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationtrackerComponent } from './donationtracker.component';

describe('DonationtrackerComponent', () => {
  let component: DonationtrackerComponent;
  let fixture: ComponentFixture<DonationtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

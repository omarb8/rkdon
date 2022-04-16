import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifieddonsComponent } from './verifieddons.component';

describe('VerifieddonsComponent', () => {
  let component: VerifieddonsComponent;
  let fixture: ComponentFixture<VerifieddonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifieddonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifieddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

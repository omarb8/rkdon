import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VounteerComponent } from './vounteer.component';

describe('VounteerComponent', () => {
  let component: VounteerComponent;
  let fixture: ComponentFixture<VounteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VounteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VounteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

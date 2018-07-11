import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterersComponent } from './caterers.component';

describe('CaterersComponent', () => {
  let component: CaterersComponent;
  let fixture: ComponentFixture<CaterersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

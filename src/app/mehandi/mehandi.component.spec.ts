import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MehandiComponent } from './mehandi.component';

describe('MehandiComponent', () => {
  let component: MehandiComponent;
  let fixture: ComponentFixture<MehandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MehandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MehandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

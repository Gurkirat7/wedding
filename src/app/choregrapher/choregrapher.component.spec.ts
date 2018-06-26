import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoregrapherComponent } from './choregrapher.component';

describe('ChoregrapherComponent', () => {
  let component: ChoregrapherComponent;
  let fixture: ComponentFixture<ChoregrapherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoregrapherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoregrapherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

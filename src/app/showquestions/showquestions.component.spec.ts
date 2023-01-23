import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowquestionsComponent } from './showquestions.component';

describe('ShowquestionsComponent', () => {
  let component: ShowquestionsComponent;
  let fixture: ComponentFixture<ShowquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

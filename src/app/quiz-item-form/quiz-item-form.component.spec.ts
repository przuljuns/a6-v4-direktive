import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizItemFormComponent } from './quiz-item-form.component';

describe('QuizItemFormComponent', () => {
  let component: QuizItemFormComponent;
  let fixture: ComponentFixture<QuizItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

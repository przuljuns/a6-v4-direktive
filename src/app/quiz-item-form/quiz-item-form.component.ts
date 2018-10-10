import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { QuizItem } from '../model/quiz-item.model';

@Component({
  selector: 'app-quiz-item-form',
  templateUrl: './quiz-item-form.component.html',
  styleUrls: ['./quiz-item-form.component.css']
  //, encapsulation: ViewEncapsulation.None
  //, encapsulation: ViewEncapsulation.ShadowDom
})
export class QuizItemFormComponent implements OnInit {
  @Output() quizItemCreated = new EventEmitter<QuizItem>();

  constructor() { }

  ngOnInit() {
  }

  createQuizItem(q, a) {
    this.quizItemCreated.emit({
      question: q,
      answer: a,
      hideAnswer: true
    });
  }
}

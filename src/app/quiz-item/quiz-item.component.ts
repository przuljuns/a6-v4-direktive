import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { QuizItem } from '../model/quiz-item.model';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent implements OnInit {

  @Input() quizItemData: QuizItem;
  buttonTitle = 'Prikaži';

  constructor() { }

  ngOnInit() {
  }

  toggleHideAnswer() {
    this.quizItemData.hideAnswer = !this.quizItemData.hideAnswer;
    if (this.quizItemData.hideAnswer) {
      this.buttonTitle = 'Prikaži';
    } else {
      this.buttonTitle = 'Sakrij';
    }
      
  }

  klik() {
    console.log("klik item");
  }
}
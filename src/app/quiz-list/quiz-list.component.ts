import { Component, OnInit, ViewChildren, QueryList, SimpleChanges } from '@angular/core';
import { QuizItem } from '../model/quiz-item.model';
import { QuizItemComponent } from '../quiz-item/quiz-item.component';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizItems: QuizItem[];

  @ViewChildren(QuizItemComponent) quizItemViewChildren: QueryList<QuizItemComponent>;

  constructor() { 
    this.quizItems = [
      {question: 'Glavni grad Italije?', answer: 'Rim', hideAnswer: true},
      {question: 'Najviši vrh Evrope?', answer: 'Elbrus', hideAnswer: true},
      {question: 'Reka ispod savskog mosta?', answer: 'Sava', hideAnswer: true}
    ];
  }
  
  ngOnInit() {
  }

  addQuizItem(quizItem) {
    this.quizItems.unshift(quizItem);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges ${this.quizItems}`);
    for (let key in changes) {
      console.log(`${key} promenjen.
                   Trenutno: ${changes[key].currentValue}
                   Prethodno: ${changes[key].previousValue}`);
    }
  }  

  klik() {
    console.log("klik item");
  }

  ngAfterViewInit() {
    let qi: QuizItemComponent[] = this.quizItemViewChildren.toArray();
    for(let child of qi) {
      console.log(child.quizItemData.question);
    }
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //  content projection u quiz-list
  quizItem = {
    question: 'q content',
    answer: 'a content',
    hideAnswer: false
  };

  title = 'vezbe2';

  klik() {
    console.log("klik root");
  }
}

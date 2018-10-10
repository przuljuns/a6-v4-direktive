import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizItemFormComponent } from './quiz-item-form/quiz-item-form.component';
import { ShadowDirective } from './directives/shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuizItemComponent,
    QuizListComponent,
    QuizItemFormComponent,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

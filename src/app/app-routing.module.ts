import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ShowQuizComponent } from './show-quiz/show-quiz.component';
import { ShowquestionsComponent } from './showquestions/showquestions.component';
import { TakequizComponent } from './takequiz/takequiz.component';

const routes: Routes = [
  {
    path: 'createQuiz',
    component: AddQuizComponent,
    pathMatch: 'full',
  },
  {
    path: 'showQuiz',
    component: ShowQuizComponent,
    pathMatch: 'full'
  },
  {
    path: 'showQuestions/:id/:title',
    component: ShowquestionsComponent,
  },
  {
    path: 'addQuestion/:id',
    component: AddQuestionComponent
  },
  {
    path: 'takeQuiz/:id',
    component: TakequizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

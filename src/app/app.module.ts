import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { MainpageComponent } from './mainpage/mainpage.component';
import {MatIconModule} from '@angular/material/icon';
import { ShowQuizComponent } from './show-quiz/show-quiz.component';
import { ShowquestionsComponent } from './showquestions/showquestions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import {MatSelectModule} from '@angular/material/select';
import { TakequizComponent } from './takequiz/takequiz.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddQuizComponent,
    NavbarComponent,
    SidebarComponent,
    MainpageComponent,
    ShowQuizComponent,
    ShowquestionsComponent,
    AddQuestionComponent,
    TakequizComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }

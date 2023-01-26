import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url="http://localhost:9191/quiz";
  constructor(private http:HttpClient) { }

  createQuiz(quizData: any){
    return this.http.post(`${this.url}` + '/createQuiz', quizData);
  }

  getQuiz(){
    return this.http.get(`${this.url}` + '/getQuizData');
  }

  createQuestion(questionData:any){
    return this.http.post(`${this.url}` + '/createQuestion', questionData);
  }

  getQuestion(qid:any){
    return this.http.get(`${this.url}` + '/getQuestions/' + qid);
  }

  deleteQuiz(qid:any){
    return this.http.delete(`${this.url}` + '/deleteQuiz/' + qid);
  }
}

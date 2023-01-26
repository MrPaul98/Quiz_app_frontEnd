import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-showquestions',
  templateUrl: './showquestions.component.html',
  styleUrls: ['./showquestions.component.css']
})
export class ShowquestionsComponent implements OnInit {
qId: string | undefined;
title: string | undefined;
questions:any;
  constructor(private _route: ActivatedRoute, private service:QuizService) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['id'];
    this.title = this._route.snapshot.params['title'];
    this.getAllQuestion();
  }

  getAllQuestion(){
    this.service.getQuestion(this.qId).subscribe(
      (response:any)=>{
        this.questions = response.object;
      },
      (error:any) =>{

      }
    );
  }
}

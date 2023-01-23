import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showquestions',
  templateUrl: './showquestions.component.html',
  styleUrls: ['./showquestions.component.css']
})
export class ShowquestionsComponent implements OnInit {
qId: string | undefined;
title: string | undefined;
questions = [
  {
    id: 1,
    question: 'What is your name ?',
    options: ['a','b','c','d'],
    answer: 'Paul'
  }
];
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['id'];
    this.title = this._route.snapshot.params['title'];
  }

}

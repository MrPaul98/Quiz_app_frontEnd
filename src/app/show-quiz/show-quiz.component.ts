import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

   quiz = [
    {
      qid: 1234,
      title: "Program",
      discription: "This is a programming Exam",
      maxQuestion: 30,
      maxMark: 100
    }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}

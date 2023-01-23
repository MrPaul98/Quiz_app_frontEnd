import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 question = {
    qId: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  constructor(private _router:ActivatedRoute) { }

  ngOnInit(): void {
    this.question.qId = this._router.snapshot.params['id'];
  }

}

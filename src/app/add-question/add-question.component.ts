import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 question = {
    qid: '',
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  title:any;
  constructor(private _router:ActivatedRoute, private service:QuizService,private stack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.question.qid = this._router.snapshot.params['id'];
    this.title = this._router.snapshot.params['title'];
  }
  createQuestion(){
    if(this.question != null){
      this.service.createQuestion(this.question).subscribe(
        (response:any) => {
          if(response.status == 200){
            this.stack.open(response.message , 'Cancel',{
              duration : 3000,
          });
          this.router.navigateByUrl('/showQuestions/'+this.question.qid+'/'+this.title);
          this.question = {
            qid: '',
            content: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            answer: ''
          };
          }
        },
        (error:any)=>{
          this.stack.open(error.message , 'Cancel',{
            duration : 3000,
        });
        }
      );
    }
  }

}

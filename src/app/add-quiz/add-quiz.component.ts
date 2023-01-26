import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quizData = {
    qtitle: '',
    qdescription: '',
    qmark: '',
    qqno: ''
  };
  constructor(private quizService:QuizService,private stack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  
  createQuiz(){
    if(this.quizData != null && this.quizData.qtitle != '' && this.quizData.qdescription != ''
        && this.quizData.qmark != '' && this.quizData.qqno != ''){
        this.quizService.createQuiz(this.quizData).subscribe(
          (response:any)=>{
            if(response.status ==200){
              this.stack.open(response.message , 'Cancel',{
                duration : 3000,
            });
            this.quizData = {
              qtitle: '',
              qdescription: '',
              qmark: '',
              qqno: ''
            };
            this.router.navigateByUrl('/showQuiz');
            }else{
              this.stack.open(response.message , 'Cancel',{
                duration : 3000,
            });
            }
          },
          (error:any)=>{
            this.stack.open(error.message , 'Cancel',{
              duration : 3000,
          });
          }
        );
    }else{
      this.stack.open("Please provide all details." , 'Cancel',{
        duration : 3000,
    });
    }
  }
}

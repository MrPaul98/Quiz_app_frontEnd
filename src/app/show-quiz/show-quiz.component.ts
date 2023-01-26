import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {
  quizData:any;
  showerror = false;
  constructor(private service:QuizService, private stack:MatSnackBar) { }

  ngOnInit(): void {
    this.getQuizData();
  }
  deleteQuiz(id:any){
    this.service.deleteQuiz(id).subscribe(
      (response:any) => {
        this.stack.open(response.message , 'Cancel',{
          duration : 3000,
      });
      this.getQuizData();
      },
      (error:any)=>{
        this.stack.open(error.message , 'Cancel',{
          duration : 3000,
      });
      }
    );
  }
  getQuizData(){
   this.service.getQuiz().subscribe(
    (response:any) => {
        if(response.status == 200){
          this.quizData = response.object;
          if(this.quizData.length == 0){
              this.showerror = true;
          }
        }
    },
    (error:any) =>{

    }
   );
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-takequiz',
  templateUrl: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css']
})
export class TakequizComponent implements OnInit {
  color = "green";
  textcolor = "aliceblue";
  flag1 = false;
  flag2 = false;
  flag3 = false;
  flag4 = false;
  index = 0;
  question = {
    qid: '',
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  allQuestions:any;
  quizLength:any;
  constructor(private _router:ActivatedRoute, private service:QuizService, private stack:MatSnackBar) { }

  ngOnInit(): void {
    this.question.qid = this._router.snapshot.params['id'];
    this.getAllQuestion();
  }
  getAllQuestion(){
    this.service.getQuestion(this.question.qid).subscribe(
      (response:any)=>{
        this.allQuestions = response.object;
        this.quizLength = this.allQuestions.length;
        this.question.content = this.allQuestions[this.index].content;
        this.question.option1 = this.allQuestions[this.index].option1;
        this.question.option2 = this.allQuestions[this.index].option2;
        this.question.option3 = this.allQuestions[this.index].option3;
        this.question.option4 = this.allQuestions[this.index].option4;
        this.question.answer = this.allQuestions[this.index].answer;
      },
      (error:any) =>{

      }
    );
  }
  showAnswer(){
    if(this.question.answer == this.question.option1){
        this.flag1 = true;
    }else if(this.question.answer == this.question.option2){
      this.flag2 = true;
    }else if(this.question.answer == this.question.option3){
      this.flag3 = true;
    }else{
      this.flag4 = true;
    }

  }
  changeQuestion(nOrp:any){
    if(nOrp == "n"){
        if((this.quizLength - 1 )!= this.index){
          this.index++;
          this.question.content = this.allQuestions[this.index].content;
          this.question.option1 = this.allQuestions[this.index].option1;
          this.question.option2 = this.allQuestions[this.index].option2;
          this.question.option3 = this.allQuestions[this.index].option3;
          this.question.option4 = this.allQuestions[this.index].option4;
          this.question.answer = this.allQuestions[this.index].answer;
          this.flag1 = false;
          this.flag2 = false;
          this.flag3 = false;
          this.flag4 = false;
        }else{
          this.stack.open("This is last question.", 'Cancel',{
            duration : 3000,
        });
        }
    }else{
      if(this.index > 0){
        this.index--;
        this.question.content = this.allQuestions[this.index].content;
        this.question.option1 = this.allQuestions[this.index].option1;
        this.question.option2 = this.allQuestions[this.index].option2;
        this.question.option3 = this.allQuestions[this.index].option3;
        this.question.option4 = this.allQuestions[this.index].option4;
        this.question.answer = this.allQuestions[this.index].answer;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
      }else{
        this.stack.open("This is first question, Please click Next.", 'Cancel',{
          duration : 3000,
      });
      }
    }
  }
}

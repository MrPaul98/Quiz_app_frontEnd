import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takequiz',
  templateUrl: './takequiz.component.html',
  styleUrls: ['./takequiz.component.css']
})
export class TakequizComponent implements OnInit {
  color = "green";
  textcolor = "aliceblue";
  flag = false;
  constructor() { }

  ngOnInit(): void {
  }

}

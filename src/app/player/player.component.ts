import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  name: string;
  score: number;
  
  constructor(name: string, score: number) {
	  this.name = name;
	  this.score = score;
    }


  ngOnInit() {
  }

}

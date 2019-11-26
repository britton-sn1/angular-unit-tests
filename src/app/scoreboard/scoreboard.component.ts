import { Component, OnInit } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  players = [];

  constructor() { 
    this.players[0] = new PlayerComponent();
    this.players[0].name="player 1";
    this.players[0].score = 301;

    this.players[1] = new PlayerComponent();
    this.players[1].name="player 2";
    this.players[1].score = 301;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  title = 'Simon\'s player app';
  players: Player[];
  selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);   
  }

  ngOnInit(): void {
    this.getPlayers();
  }
  
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}



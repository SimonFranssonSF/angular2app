import { Component } from '@angular/core';
import { Player } from './player';

// Mock objects
const PLAYERS: Player[] = [
  { id: 11, name: 'Mr. Nice', level: 500 },
  { id: 12, name: 'Narco', level: 500 },
  { id: 13, name: 'Bombasto', level: 500 },
  { id: 14, name: 'Celeritas', level: 500 },
  { id: 15, name: 'Magneta', level: 500 },
  { id: 16, name: 'RubberMan', level: 500 },
  { id: 17, name: 'Dynama', level: 500 },
  { id: 18, name: 'Dr IQ', level: 500 },
  { id: 19, name: 'Magma', level: 500 },
  { id: 20, name: 'Tornado', level: 500 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simon\'s player app';
  players = PLAYERS;
  selectedPlayer: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
}



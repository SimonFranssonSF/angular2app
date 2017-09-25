import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayersComponent } from './players.component';
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Added to create two-way binding using <input> tags
    RouterModule.forRoot([
      {
        path: 'players',
        component: PlayersComponent
      }
    ])
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

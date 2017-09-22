import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Added to create two-way binding using <input> tags
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

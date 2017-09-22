import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Added to create two-way binding using <input> tags
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

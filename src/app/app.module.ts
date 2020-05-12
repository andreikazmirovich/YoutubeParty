import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './components/player/player.component';
import { ChatComponent } from './components/chat/chat.component';
import { UrlDialogComponent } from './components/url-dialog/url-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ChatComponent,
    UrlDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

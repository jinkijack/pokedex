import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HistoryCardComponent } from './components/history-card/history-card.component';
import { FavCardComponent } from './components/fav-card/fav-card.component';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { FavBtnComponent } from './components/fav-btn/fav-btn.component';

const components:any = [
  CardComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    HistoryCardComponent,
    FavCardComponent,
    FavBtnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

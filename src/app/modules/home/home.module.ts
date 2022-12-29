import { HistoryCardComponent } from './../../components/history-card/history-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from 'src/app/components/card/card.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';

const components:any = [
  CardComponent,
  HistoryCardComponent
]


@NgModule({
    declarations: [
        HomeComponent,
        ...components,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ]
})
export class HomeModule { }
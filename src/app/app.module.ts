import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredictComponent } from './components/predict/predict.component';
import { PredictResponseComponent } from './components/predict-response/predict-response.component';
import { Data } from './providers/data';

@NgModule({
  declarations: [
    AppComponent,
    PredictComponent,
    PredictResponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }

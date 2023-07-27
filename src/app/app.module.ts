import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenComponentComponent } from './screen-component/screen-component.component';
import { PopupResultComponent } from './popup-result/popup-result.component';
import {FormsModule} from '@angular/forms';
import { ScoreComponent } from './score/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponentComponent,
    PopupResultComponent,
    ScoreComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

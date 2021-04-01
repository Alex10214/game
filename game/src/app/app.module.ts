import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenComponentComponent } from './screen-component/screen-component.component';
import { PopupResultComponent } from './popup-result/popup-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponentComponent,
    PopupResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

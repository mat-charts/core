import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatChartsModule } from 'projects/core/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

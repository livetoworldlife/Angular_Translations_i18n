import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // import here
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (http:HttpClient)=> new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    }) // for frontend
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

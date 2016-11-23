import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Resources} from './services/Resources.ts';

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}, Resources],
  bootstrap   : [AppComponent]
})
export class AppModule {

}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PrismaComponentsModule} from '@mprisma/components';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrismaComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

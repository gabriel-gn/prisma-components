import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PrismaComponentsModule} from '../../../design-system/projects/components/src/lib/components.module';

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

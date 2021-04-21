import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from '../../../design-system/projects/components/src/lib/button/button.module';
import {DraggableListModule} from '../../../design-system/projects/components/src/lib/draggable-list/draggable-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DraggableListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

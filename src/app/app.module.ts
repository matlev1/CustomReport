import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TabViewModule, MenuModule} from 'primeng/primeng';
import { TabviewComponent } from './tabview/tabview.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    TabviewComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

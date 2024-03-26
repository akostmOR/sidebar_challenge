import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './sidebar/person/person.component';
import { GroupItemComponent } from './sidebar/group-item/group-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PersonComponent,
    GroupItemComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';
import { SetupComponent } from './setup/setup.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestService, HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

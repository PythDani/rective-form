import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ContacReactiveComponent } from './contac-reactive/contac-reactive.component';
import { ExampleServiceService } from './example-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ContacReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ExampleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

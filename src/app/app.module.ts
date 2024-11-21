import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CformComponent } from './cform/cform.component';
import { CcourseComponent } from './ccourse/ccourse.component';
import { FormsModule } from '@angular/forms';
import { CcontadorComponent } from './ccontador/ccontador.component';
import { AddComponent } from './ccontador/add/add.component';
import { MinComponent } from './ccontador/min/min.component';

@NgModule({
  declarations: [
    AppComponent,
    CfooterComponent,
    CheaderComponent,
    CformComponent,
    CcourseComponent,
    CcontadorComponent,
    AddComponent,
    MinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

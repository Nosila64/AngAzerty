import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AzertylisteComponent } from './azertyliste/azertyliste.component';
import { AzertysignComponent } from './azertysign/azertysign.component';
import { AzertywatchComponent } from './azertywatch/azertywatch.component';
import { AzertyRoutingModule } from './azerty-routing.module';
import { AzertyWelcomeComponent } from './azerty-welcome/azerty-welcome.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AzertystatComponent } from './azertystat/azertystat.component';

@NgModule({
  declarations: [
    AppComponent,
    AzertylisteComponent,
    AzertysignComponent,
    AzertywatchComponent,
    AzertyWelcomeComponent,
    AzertystatComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AzertyRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AzertyWelcomeComponent} from "./azerty-welcome/azerty-welcome.component";
import {AzertylisteComponent} from "./azertyliste/azertyliste.component";
import {AzertysignComponent} from "./azertysign/azertysign.component";
import {AzertywatchComponent} from "./azertywatch/azertywatch.component";
import {AzertystatComponent} from "./azertystat/azertystat.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: AzertyWelcomeComponent },
  { path: 'azertyliste', component: AzertylisteComponent },
  { path: 'azertysign', component: AzertysignComponent},
  { path: 'azertywatch', component: AzertywatchComponent },
  { path: 'azertystat', component: AzertystatComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AzertyRoutingModule { }

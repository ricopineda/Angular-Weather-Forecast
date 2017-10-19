import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: LandingComponent,
    children: []
  },
    {
    path: 'seattle',
    pathMatch: "full",
    component: SeattleComponent,
    children: []
  },
      {
    path: 'sanjose',
    pathMatch: "full",
    component: SanjoseComponent,
    children: []
  },
      {
    path: 'burbank',
    pathMatch: "full",
    component: BurbankComponent,
    children: []
  },
      {
    path: 'dallas',
    pathMatch: "full",
    component: DallasComponent,
    children: []
  },
      {
    path: 'washington',
    pathMatch: "full",
    component: WashingtonComponent,
    children: []
  },
      {
    path: 'chicago',
    pathMatch: "full",
    component: ChicagoComponent,
    children: []
  }

];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InvalidRouteComponent } from './components/invalid-route/invalid-route.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'daily-forecast',
    component: DailyForecastComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: InvalidRouteComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

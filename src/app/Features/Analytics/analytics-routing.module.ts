import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './components/page/analytics.component';
import { AnalyticsData } from 'src/app/Core/Guards/AnalyticsData.resolver';

const routes: Routes = [
  {path: 'analytics' , component: AnalyticsComponent , resolve : {data : AnalyticsData}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }

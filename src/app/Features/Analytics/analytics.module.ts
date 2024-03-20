import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { AnalyticsComponent } from "./components/page/analytics.component";
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from './components/GoogleChart/google-chart.component';
import { SharedModule } from "src/app/Shared/shared.module";
@NgModule({
  imports: [CommonModule, AnalyticsRoutingModule , GoogleChartsModule , SharedModule],
  declarations: [AnalyticsComponent, GoogleChartComponent ],
})
export class AnalyticsModule {}

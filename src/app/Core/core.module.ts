import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeModule } from "../Features/Home/home.module";
import { UsersModule } from "../Features/Users/users.module";
import { CashingApi } from "./Interceptors/cashingApi.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from "./Services/auth.service";
import { AuthGuard } from "./Guards/Auth.guard";
import { AnalyticsModule } from "../Features/Analytics/analytics.module";
import { AnalyticsData } from "./Guards/AnalyticsData.resolver";

@NgModule({
  imports: [CommonModule, HomeModule, UsersModule, AnalyticsModule],
  providers: [
    AuthGuard,
    AuthService,
    AnalyticsData,
    { provide: HTTP_INTERCEPTORS, useClass: CashingApi, multi: true },
  ],
  declarations: [],
  exports: [],
})
export class CoreModule {}

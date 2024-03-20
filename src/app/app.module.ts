import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDatepickerModule , BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./Shared/shared.module";
import { CoreModule } from "./Core/core.module";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    CoreModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [BsDatepickerConfig],
  bootstrap: [AppComponent],
})
export class AppModule {}

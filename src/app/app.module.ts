import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BsDatepickerModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

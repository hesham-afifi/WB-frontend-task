import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from "./app-routing.module";
import { UsersModule } from "./users/users.module";
import { UsersComponent } from "./users/users.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersService } from "./services/users.service";
import { FormBuilder, FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

const appRoutes: Routes = [
  // { path: '', component: UsersComponent },
];

@NgModule({
  declarations: [AppComponent, AddEditUserComponent, DeleteUserComponent],
  imports: [
    FormsModule,
    HttpClientModule, 
    UsersModule, 
    BrowserModule, 
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  entryComponents: [AddEditUserComponent, DeleteUserComponent],
  providers: [UsersService, BsModalService, BsModalRef, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}

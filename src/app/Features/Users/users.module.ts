import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./components/page/users.component";
import { UserService } from "./services/user.service";
import { UserRoutingModule } from "./user-routing.module";
import { UsersTableComponent } from "./components/UsersTable/users-table.component";
import { UsersFilterationComponent } from "./components/UsersFilteration/users-filteration.component";
import { SharedModule } from "src/app/Shared/shared.module";
import {
  BsDatepickerModule,
  BsDatepickerConfig,
} from "ngx-bootstrap/datepicker";
import { UserInputService } from "./services/user-input.service";
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "../../Shared/modal/modal.component";

@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent,
    UsersFilterationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [UserService, UserInputService, BsDatepickerConfig],
})
export class UsersModule {}

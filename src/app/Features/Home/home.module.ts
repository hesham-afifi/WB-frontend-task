import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/page/home.component";
import { UserPermisionComponent } from '../../Features/Home/components/user-permision/user-permision.component';

@NgModule({
  declarations: [HomeComponent, UserPermisionComponent],
  imports: [CommonModule],
})
export class HomeModule {}

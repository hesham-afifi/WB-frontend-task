import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideBarComponent } from "../Shared/components/side-bar/side-bar.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ConcatPipe } from "./pipes/Concat.pipe";
import { LoadingSpinnerComponent } from '../Shared/components/loading-spinner/loading-spinner.component';
import { ModalComponent } from "./modal/modal.component";
@NgModule({
  declarations: [ConcatPipe, SideBarComponent, LoadingSpinnerComponent ,ModalComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  exports: [ConcatPipe, SideBarComponent , LoadingSpinnerComponent , ModalComponent],
})
export class SharedModule {}

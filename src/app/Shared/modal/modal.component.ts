import { Component, Input } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { UserInputService } from "../../Features/Users/services/user-input.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  @Input() parameter: any;
  @Input() handle!: any;
  @Input() buttonText: string;

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private userInputService: UserInputService
  ) {}

  handlerFn() {
    this.modalRef.hide();
    this.handle(this.parameter);
  }

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }
}

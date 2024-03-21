import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}
  
  @Input() userId: any;
  @Input() isDarkMode: any;
  deleteUser: Subject<any> = new Subject<any>(); 
  isLang: boolean

  ngOnInit() {
    let currentLang =  localStorage.getItem('lang')
    if (currentLang == 'en') {
      this.isLang = true
    } else {
      this.isLang = false
    }
  }

  close() {
    this.bsModalRef.hide();
  }

  confirm() {
    this.bsModalRef.hide(); // Close the dialog
    this.deleteUser.next(true); // Emit data back to the parent component
    this.deleteUser.complete();
  }
}
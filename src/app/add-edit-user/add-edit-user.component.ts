import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private usersService: UsersService,
  private formBuilder: FormBuilder) {}
  @Input() userData: any;
  @Input() isDarkMode: any;
  userForm: FormGroup;
  newDataSubject: Subject<any> = new Subject<any>(); 
  isLang: boolean

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required]
    });      
    if (this.userData.id > 0) {
      this.getUserById()
    }

    let currentLang =  localStorage.getItem('lang')
    if (currentLang == 'en') {
      this.isLang = true
    } else {
      this.isLang = false
    }
  }
  
  getUserById() {
    if (this.userData.id > 0) {
      this.usersService.getUserById(this.userData.id).subscribe((res) => {
        this.userForm = this.formBuilder.group({
          firstName: [res.firstName || '', Validators.required],
          lastName: [res.lastName || '', Validators.required],
          phone: [res.phone || '', [Validators.required, Validators.pattern('[0-9]+')]],
          email: [res.email || '', [Validators.required, Validators.email]],
          birthDate: [res.birthDate || '', Validators.required]
        });
      })
    }
  }

  submit() {
    let body = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      birthDate: this.userForm.value.birthDate,
    }
    this.bsModalRef.hide(); // Close the dialog
    this.newDataSubject.next(body); // Emit data back to the parent component
    this.newDataSubject.complete();
  }

  close() {
    this.bsModalRef.hide(); // Close the dialog
  }
}

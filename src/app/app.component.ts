import { Component, Renderer2 } from '@angular/core';
import { UsersService } from './services/users.service';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LangService } from './services/lang.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dateInput:any
  searchInput:any
  usersList: any [] = [];
  filteredUsers: any [] = [];
  selectedDateRange: Date[] = [];
  isLang: boolean
  isDarkMode: boolean = false;
  page: number = 1;
  pageSize: number = 10;
  addEditUserModalRef: BsModalRef;
  deleteUserModalRef: BsModalRef;

  constructor(
    private usersService: UsersService, 
    public langService: LangService,
    private renderer: Renderer2,
    private modalService: BsModalService) {}

  ngOnInit(): void {
    this.isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))    
    this.getUsers()

    this.langService.currentLanguage$.subscribe((language) => {
      const dir = language == 'ar' ? 'rtl' : 'ltr';
      this.renderer.setAttribute(document.documentElement, 'dir', dir);
    });
    
    this.updateCurrentLang();
    
  }
  
  ngAfterContentInit(): void {
    this.dateInput = document.getElementById('dateFilter');
    this.searchInput = document.getElementById('searchInput');
  }

  changeLanguage(lang: string) {
    localStorage.setItem('lang', lang)
    // this.translate.use(lang);
    this.langService.changeLanguage(lang);
    if (lang == 'en') {
      this.isLang = true
    } else {
      this.isLang = false
    }
  }

  updateCurrentLang() {
    let langFromLocalStorage = localStorage.getItem('lang')
    if (langFromLocalStorage) {
      this.changeLanguage(langFromLocalStorage);
    } else {
      this.changeLanguage('en');
    }
  }

  getUsers() {
    this.usersService.getUsers().subscribe((res) => {
      console.log('res', res.users)
      this.usersList = res.users
      this.filteredUsers = res.users
      this.pageChanged({page: this.page, itemsPerPage: this.pageSize})
    })
  }

  onSearch(event: any) {
    let searchQuery = event.target.value
    this.filteredUsers = this.usersList.filter(user => 
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.address.city.toLowerCase().includes(searchQuery.toLowerCase())
     )
    if (searchQuery == '') {
      this.pageChanged({page: this.page, itemsPerPage: this.pageSize})
    }
  }
  onDateRangeChange(event): void {
    this.selectedDateRange = event
    this.filteredUsers = this.usersList.filter(user =>
      user.birthDate >= this.formatDate(event[0]) &&
      user.birthDate <= this.formatDate(event[1])
     )
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero if needed
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  }
  clearFilter() {
    this.filteredUsers = this.usersList;
    this.dateInput.value = '';
    this.searchInput.value = '';
    this.pageChanged({page: this.page, itemsPerPage: this.pageSize})
  }


  pageChanged(e: any): void {
    this.filteredUsers = [];
    let arr = [...this.usersList]
    let start = (e.itemsPerPage * e.page) - e.itemsPerPage
    this.page = e.page;
    this.filteredUsers = arr.splice(start, 10);
    this.dateInput.value = '';
    this.searchInput.value = '';
  }


  openAddEditUserDialog(id) {
    this.addEditUserModalRef = this.modalService.show(AddEditUserComponent, {
      initialState: {
        userData: {id: id},
        isDarkMode: this.isDarkMode
      }
    });

    (this.addEditUserModalRef.content as AddEditUserComponent).newDataSubject.subscribe((dataFromDialog: any) => {
      // Handle the data received from the dialog after it's closed
      if (id > 0) {
        this.updateUser(id, dataFromDialog)
      } else {
        this.addUser(dataFromDialog)
      }
    });
  }

  openDeleteUserDialog(id) {
    this.deleteUserModalRef = this.modalService.show(DeleteUserComponent, {
      initialState: {
        userId: id,
        isDarkMode: this.isDarkMode
      }
    });

    (this.deleteUserModalRef.content as DeleteUserComponent).deleteUser.subscribe((isDelete: any) => {
      // Handle the data received from the dialog after it's closed
      if (isDelete) {
        this.deleteUserById(id);
      }
    });
  }

  updateUser(id, body) {
    this.usersService
        .updateUserById(id, body)
        .subscribe((updatedUser) => {
          this.updateTableData(id, updatedUser)
        })
  }

  addUser(body) {
    this.usersService
        .addUser(body)
        .subscribe((res) => {
          this.filteredUsers.unshift(res)
          this.usersList.unshift(res)
        })
  }

  updateTableData(id, updatedUser){
    this.filteredUsers.forEach(user => {
      if (user.id === id) {
        user.firstName = updatedUser.firstName;
        user.lastName = updatedUser.lastName;
        user.email = updatedUser.email;
        user.birthDate = updatedUser.birthDate;
        user.phone = updatedUser.phone;
      }
    });
  }

  deleteUserById(id) {
    this.usersService
        .deleteUser(id)
        .subscribe((res) => {
          const index = this.filteredUsers.findIndex(user => user.id === id);
          this.filteredUsers.splice(index, 1);
        })
  }

  darkMode() {
    this.isDarkMode = !this.isDarkMode
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode))
  }
}

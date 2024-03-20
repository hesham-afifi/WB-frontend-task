import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserService } from "./user.service";
import { User } from "src/app/Core/Models/user.model";

@Injectable()
export class UserInputService {
  users = [];
  filter = [];
  id = 0;
  filteredDataSubject: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);


  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  searchByFirstName(value: string) {
    if (value) {
      this.filter = this.users.filter((user) =>
        user.firstName.toLowerCase().startsWith(value.toLowerCase())
      );
    } else {
      this.filter = this.users;
    }
    this.filteredDataSubject.next(this.filter);
  }

  filterByDate(value: string[]) {
    if (value.length == 2) {
      this.filter = this.users.filter((user) => {
        return user.birthDate >= value[0] && user.birthDate <= value[1];
      });
    } else {
      this.filter = this.users;
    }
    this.filteredDataSubject.next(this.filter);
  }

  deleteUser(id: number) {
    if (id) {
      this.users = this.users.filter((user) => {
        return user.id !== id;
      });
      this.filteredDataSubject.next(this.users);
    }
  }
}

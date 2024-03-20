import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "src/app/Core/Models/user.model";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  error: string = "";

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}

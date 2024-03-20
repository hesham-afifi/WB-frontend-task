import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/Core/Services/auth.service";

@Component({
  selector: "app-user-permision",
  templateUrl: "./user-permision.component.html",
  styleUrls: ["./user-permision.component.css"],
})
export class UserPermisionComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}

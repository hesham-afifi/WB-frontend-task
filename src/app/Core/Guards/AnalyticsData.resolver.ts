import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/Features/Users/services/user.service";
import { User } from "../Models/user.model";

@Injectable()
export class AnalyticsData implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<User> | Promise<User> | User {
    return this.userService.getAllUsers();
  }
}

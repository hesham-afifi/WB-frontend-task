import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "src/app/Core/Models/user.model";
import { pipe } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(`${environment.baseURL}/users`).pipe(
      map((res: any) => {
        const users = res.users;
        const updatedUsers = users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          title: user.company.title,
          email: user.email,
          phone: user.phone,
          image: user.image,
          city: user.address.city,
          birthDate: user.birthDate,
        }));
        return updatedUsers;
      })
    );
  }
}

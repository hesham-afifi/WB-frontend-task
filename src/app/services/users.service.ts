import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL: string = 'https://dummyjson.com/'
  users: string = 'users'
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseURL}${this.users}`)
  }
  getUserById(id): Observable<any> {
    return this.http.get(`${this.baseURL}${this.users}/${id}`)
  }

  updateUserById(userId: number, body: any): Observable<any> {
    return this.http.put(`${this.baseURL}${this.users}/${userId}`, body, { headers: this.headers });
  }
  deleteUser(userId: number): Observable<any> {
    const url = `${this.baseURL}${this.users}/${userId}`;
    return this.http.delete(url);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}${this.users}/add`, user, { headers: this.headers });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {

  }

  getUsers() {
    return this.httpClient.get('http://localhost:3000/users');
  }

  createUser(newUser: any) {
    return this.httpClient.post('http://localhost:3000/users', newUser);
  }

  deleteUser(id: number) {
    return this.httpClient.delete('http://localhost:3000/users/' + id);
  }

  updateUser(updatedUser: any) {
    return this.httpClient.put('http://localhost:3000/users/' + updatedUser.id, updatedUser);
  }
}

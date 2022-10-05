import { Component } from '@angular/core';
import {HttpService} from "./http.service";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-server-examples';

  users: any = null;
  nameInput: string = "";
  userIdInput: string = "";

  updateUserInputId: string = "";
  updateUserInputName: string = "";

  constructor(private httpService: HttpService) {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  createUser() {
    const newUser = { id: new Date().getTime(), name: this.nameInput}
    this.httpService.createUser(newUser).pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsers();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  deleteUser() {
    const id = parseInt(this.userIdInput);
    this.httpService.deleteUser(id).pipe(first()).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsers();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  updateUser() {
    const updatedUser = {
      id: parseInt(this.updateUserInputId),
      name: this.updateUserInputName
    }
    this.httpService.updateUser(updatedUser).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsers();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}

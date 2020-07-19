import {Injectable} from '@angular/core';
import {InfoModel} from '../../app/models/info.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  users: InfoModel[] = [
    {name: "Diana",
      age: 30,
      email: "diana.mail@mail.com",
      gender: "Female"}
  ];

  constructor() { }

  getAllUsers(): InfoModel[] {
    return this.users;
  }

  addUser(user: InfoModel) {
    this.users = this.users.concat(user);
    console.log(this.users)
  }
}

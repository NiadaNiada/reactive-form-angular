import {Injectable} from '@angular/core';
import {InfoModel} from '../../app/models/info.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  users: InfoModel[];

  getAllUsers(): InfoModel[] {
    return this.users;
  }

  addUser(user: InfoModel) {
    this.users = this.users.concat(user);
  }
}

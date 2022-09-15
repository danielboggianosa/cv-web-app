import { Injectable } from '@angular/core';
import { USERS } from '../users';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUserData(username: string): User {
    return USERS[username];
  }

  getUsersList(): {value: string; label:string}[]{
    return Object.entries(USERS).map(([key, value]) => ({
      value: key,
      label: value.name,
    }));
  }
}

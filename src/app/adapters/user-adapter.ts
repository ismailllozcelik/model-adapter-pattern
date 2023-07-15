import { Injectable } from '@angular/core';

import { ModelAdapter } from '../contracts';
import { User, UserResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserAdapter implements ModelAdapter<UserResponse, User> {
  adapt = (user: UserResponse): User => 
    Object.assign(new User(), {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    });

  adaptArray = (users: UserResponse[]): User[] => 
    users.map(user => this.adapt(user));
}
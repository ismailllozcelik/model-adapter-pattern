import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { UserAdapter } from '../adapters';
import { User, UserResponse } from '../models';
import { memoizeRequestObservable } from '../decorators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,
    private _userAdapter: UserAdapter,
  ) { }


  @memoizeRequestObservable
  list(params?: HttpParams): Observable<User[]> {
    return this._http.get<UserResponse[]>(`/users`, { params })
      .pipe(map(this._userAdapter.adaptArray));
  }

}

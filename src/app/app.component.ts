import { tap } from 'rxjs/operators';
import { Component } from '@angular/core';

import { User } from './models';
import { UserService } from './services';
import { HttpParams } from '@angular/common/http';

// import 'milligram-blue';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  
  public users: User[];
  public limit = 5;

  constructor(
    private _userService: UserService,
  ) {
    this.click()
  }

  click() {
    this._userService.list({ _limit: this.limit.toString() } as any as HttpParams)
      .pipe(tap(users => this.users = users))
      .subscribe(console.log);
  }
}

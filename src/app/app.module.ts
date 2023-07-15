import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';

import { AppComponent } from '.';
import { UserAdapter } from './adapters';
import { BaseUrlProvider } from './interceptors';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    UserService,
    UserAdapter,
    BaseUrlProvider,
  ],
})
export class AppModule { }

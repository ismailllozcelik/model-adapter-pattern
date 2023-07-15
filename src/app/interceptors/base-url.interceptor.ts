import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

export const baseURL = 'https://jsonplaceholder.typicode.com';

export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.url.startsWith('http')
      ? request
      : request.clone({ url: `${baseURL}${request.url}` })
    );
  }
}

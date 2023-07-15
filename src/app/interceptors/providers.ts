import { ClassProvider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseUrlInterceptor } from './base-url.interceptor';

export const BaseUrlProvider =
  generateClassProvider(BaseUrlInterceptor);

export function generateClassProvider(useClass: any): ClassProvider {
  return ({
    useClass,
    multi: true,
    provide: HTTP_INTERCEPTORS,
  });
}


import { take, tap } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';

export function memoizeRequestObservable(
  target: Object,
  name: string,
  descriptor: PropertyDescriptor
) {
  const [cache, method] = [{}, descriptor.value];
  descriptor.value = function(...originalArgs: any[]): Observable<any> {
    const key = JSON.stringify(originalArgs);
    if (key in cache) { return cache[key]; }
    let response = new ReplaySubject();
    method.apply(this, originalArgs)
      .pipe(take(1))
      .pipe(tap(res => response.next(res)))
      .subscribe();

    cache[key] = response.pipe(take(1));
    return cache[key];
  };
  return descriptor;
}

// Angular
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// RxJS
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { Logout } from '../../../auth/_actions/auth.actions';

/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
@Injectable()
export class InterceptService implements HttpInterceptor {


  constructor(
    private router: Router,
    private store: Store<AppState>,

  ) {

  }

  // intercept request and add token
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // tslint:disable-next-line:no-debugger
    // modify request
     request = request.clone({
     	setHeaders: {
     		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
     	}
     });
    // console.log('----request----');
    // console.log(request);
    // console.log('--- end of request---');

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            // console.log('all looks good');
            // http response status code
            // console.log(event.status);
          }
        },
        error => {
          // http response status code
          // console.log('----response----');
          // console.error('status code:');
          // tslint:disable-next-line:no-debugger
          console.error(error.status);
          console.error(error.message);
          // console.log('--- end of response---');

          if (error.status === 401) {
            this.handleAuthError();
            return of(error);
          }
          throw error;
        }
      )
    );
  }


  private handleAuthError() {
    this.store.dispatch(new Logout());
    this.router.navigateByUrl('auth/login');
  }
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {StorageService} from '@core/services/storage.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private jwtService: StorageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.jwtService.getToken();

    // const isLoggedIn = token && this.authService.isLoggedIn;
    // const isApiUrl = request.url.startsWith(environment.apiSettings.hostname);

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}

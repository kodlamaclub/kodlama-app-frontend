import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {StorageService} from '@core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private jwtService: StorageService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.jwtService.getToken()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}

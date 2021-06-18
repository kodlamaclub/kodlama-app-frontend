import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {ApiService} from '@core/services/api.service';
import {StorageService} from '@core/services/storage.service';
import {Router} from '@angular/router';
import {IUser} from '@shared/interfaces';

@Injectable()
export class AuthService {
  private userStateSubject: BehaviorSubject<IUser>;
  public userState$: Observable<IUser>;

  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  constructor(
    private apiService: ApiService,
    private jwtService: StorageService,
    private router: Router,
  ) {
    this.userStateSubject = new BehaviorSubject(null);
    this.userState$ = this.userStateSubject.asObservable().pipe(distinctUntilChanged());

    this.isLoggedInSubject = new BehaviorSubject(false);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable().pipe(distinctUntilChanged());
  }

  public async getUser(): Promise<IUser> {
    return new Promise(async (resolve, reject) => {
      const sleep = ms => new Promise(r => setTimeout(r, ms));
      let user = await this.userState;
      while (!user) {
        await sleep(100);
        user = await this.userState;
      }
      resolve(user);
    });
  }

  public get userState(): IUser {
    return this.userStateSubject.value;
  }

  public get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  fetchUser() {
    const token = this.jwtService.getToken();

    if (token) {
      this.apiService.get('user/@me')
        .toPromise()
        .then(response => {
          this.set(response.data);
        })
        .catch(() => this.purge());
    } else {
      this.purge();
    }
  }

  getUserID(): Promise<string> {
    return new Promise((resolve, reject) => {

      this.userState$.subscribe(user => {
        if (user !== null) {
          // eslint-disable-next-line no-underscore-dangle
          resolve(user._id);
        }
      });
    });
  }

  set(user) {
    this.userStateSubject.next(user);
    this.isLoggedInSubject.next(true);
  }

  purge() {
    this.jwtService.destroyToken();

    this.userStateSubject.next(null);
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/giris-yap']);
  }

  login(phone, password): Observable<boolean> {
    return this.apiService.post('session', {phone, password})
      .pipe(map(
        response => {
          this.jwtService.saveToken(response.data);
          this.fetchUser();
          return true;
        }
      ));
  }


}

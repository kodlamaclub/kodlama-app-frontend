import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable()
export class ThemeService {

  private themeStateSubject: BehaviorSubject<boolean>;
  public themeState$: Observable<boolean>;

  constructor() {
    // @ts-ignore
    this.themeStateSubject = new BehaviorSubject(false);
    this.themeState$ = this.themeStateSubject.asObservable().pipe(distinctUntilChanged());
  }

  toggle(): void {
    this.themeStateSubject.next(!this.themeStateSubject.value);
  }

}

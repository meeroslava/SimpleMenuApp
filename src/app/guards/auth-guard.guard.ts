import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (location.search.indexOf('isAdmin=true') > -1) {
      return true;
    }

    this.router.navigate(['/']).then((navigated: boolean) => {
      if (navigated) {
        this.snackBar.open('Only admins can edit menus', 'Ok', {
          verticalPosition: 'top',
          politeness: 'assertive',
        });
      }
    });
    return false;
  }
}

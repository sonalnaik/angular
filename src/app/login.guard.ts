import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
     
    if (localStorage.getItem('user_type')) {
            // logged in so return true
            return true; 
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
  }


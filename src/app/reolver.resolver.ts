import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// ovako bi trebalo
//export class UserResolver implenets Resolve<User>
export class UserResolver implements Resolve<Observable<any>> {
  constructor(private client: HttpClient, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.client.get('https://jsonplaceholder.typicode.com/posts');
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, ReplaySubject } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  public pages: Array<string> = ['home', 'member', 'todo'];

  private currentPage = new ReplaySubject();
  public currentPage$ = this.currentPage.asObservable().pipe(
    startWith(this.pages[0])
  );

  public redirect(path?: string) {
    this.router.navigate([`${path}`]);
    this.currentPage.next(path);
  }


}

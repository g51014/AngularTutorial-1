import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private $http: HttpClient
  ) { }

    public members$: Observable<any> = this.$http.get('https://jsonplaceholder.typicode.com/users')

}

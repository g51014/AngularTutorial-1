import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private $http: HttpClient
  ) { }

    public members$ = this.$http.get('https://jsonplaceholder.typicode.com/users')

}

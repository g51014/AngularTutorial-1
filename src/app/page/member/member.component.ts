import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/service/member/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(
    public $member: MemberService
  ) { }

  ngOnInit() {
  }

}

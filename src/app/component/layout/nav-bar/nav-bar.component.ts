import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/service/route/route.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public $router: RouteService
  ) { }

  ngOnInit() {
    this.$router.redirect(window.location.pathname.replace('/', ''));
  }

}

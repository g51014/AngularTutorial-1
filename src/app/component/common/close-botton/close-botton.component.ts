import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-close-botton',
  templateUrl: './close-botton.component.html',
  styleUrls: ['./close-botton.component.scss']
})
export class CloseBottonComponent implements OnInit {

  @Input() public event: any;
  @Input() public id: number;

  constructor() { }

  ngOnInit() {
  }

  public clickEvent() {
    this.event(this.id);
  }
}

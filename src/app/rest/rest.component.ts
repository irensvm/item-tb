import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  items: Items [] = [];

  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getItems().subscribe((response) => {
      this.items = response
    })
  }


}

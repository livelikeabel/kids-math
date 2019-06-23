import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit {

  numberList = []

  constructor() {
    this.numberList = new Array(30).fill(null).map((_, i) => i+1)
    .map(v => {
      if (v == 6 || v == 12 || v == 27) v = 'input';
      return v
    })
  }

  ngOnInit() {
  }

}

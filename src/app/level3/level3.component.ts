import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit {

  numberList = []

  constructor() {
    this.numberList = new Array(30).fill(null).map((_, i) => {
      return { value: i+1, isInput: false}
    })
    .map(({value, isInput})=> {
      if (value == 6 || value == 12 || value == 27) isInput = true;
      return {value, isInput}
    })
  }

  ngOnInit() {
  }

  onKey({value}, inputValue) {
    if(value == inputValue) {
      this.numberList = this.numberList.map(v => {
        if(v.value == value) v.isInput = !v.isInput
        return v
      })
    }

  }

}

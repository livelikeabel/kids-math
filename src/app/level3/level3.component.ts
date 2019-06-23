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
    this.checkNumberList();
  }

  checkNumberList() {
    const result = this.numberList.every(v => !v.isInput)
    
    // 다음 스테이지
    if(result) {
      this.numberList = this.numberList.map(({value, isInput}) => {
        return {value: value + 30, isInput}
      })
      .map(({value, isInput}) => {
        if (value == 36 || value == 42 || value == 57) isInput = true;
        return {value, isInput}
      })
    }
  }
}

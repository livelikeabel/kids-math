import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit {

  numberList = [];
  randomNumbers = [];
  gameStatus = { level: 1, count: 0 };

  constructor() {
    this.randomNumbers = this._getRandomNumbers(1, 30);
    this.numberList = new Array(30).fill(null).map((_, i) => {
      return { value: i + 1, isInput: false }
    })
      .map(({ value, isInput }) => {
        if (this.randomNumbers.includes(value)) isInput = true;
        return { value, isInput }
      })
  }

  ngOnInit() {
  }

  onKey({ value }, inputValue) {
    if (value == inputValue) {
      this.numberList = this.numberList.map(v => {
        if (v.value == value) v.isInput = !v.isInput
        return v
      })
    }
    this.checkNumberList();
  }

  checkNumberList() {
    const result = this.numberList.every(v => !v.isInput)
    console.log(this.gameStatus.count)

    // 모두 true이고, 현재 단계 3번 이하일때 다시 고고
    if (result && this.gameStatus.count < 2) {
      this.gameStatus.count++;
      this._setGame();
    }

    // 1단계 3번 클리어 한다면,
    // 다음 스테이지
    if (result && this.gameStatus.count > 2) {
      this.gameStatus.level++;
      // 1      // 2     // 3
      //1, 30 // 31, 60 // 61, 90//
      // this.randomNumbers = this._getRandomNumbers(31, 60);
      const { level } = this.gameStatus;
      this.randomNumbers = this._getRandomNumbers(1 + 30 * (level - 1), 30 * level);
      this.numberList = this.numberList.map(({ value, isInput }) => {
        return { value: value + 30, isInput }
      })
        .map(({ value, isInput }) => {
          if (this.randomNumbers.includes(value)) isInput = true;
          return { value, isInput }
        })
    }
  }

  _getRandomNumbers(min, max) {
    const temp = [];
    for (let i = 0; i < 2; i++) {
      temp.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return temp;
  }

  _setGame() {
    this.randomNumbers = this._getRandomNumbers(1, 30);
    this.numberList = new Array(30).fill(null).map((_, i) => {
      return { value: i + 1, isInput: false }
    })
      .map(({ value, isInput }) => {
        if (this.randomNumbers.includes(value)) isInput = true;
        return { value, isInput }
      })
  }
}

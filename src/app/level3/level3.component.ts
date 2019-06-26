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
    if (result) {
      this.gameStatus.count++;
      if (this.gameStatus.count < 3) {
        this._setGame();
      }
      if (this.gameStatus.count >= 3) {
        this.gameStatus.level++;
        this.gameStatus.count = 0;
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
  }

  _getRandomNumbers(min, max) {
    const temp = [];
    for (let i = 0; i < 2; i++) {
      temp.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return temp;
  }

  _setGame() {
    const { level } = this.gameStatus;
    this.randomNumbers = this._getRandomNumbers(1 + 30 * (level - 1), 30 * level);
    this.numberList = new Array(30).fill(null).map((_, i) => {
      return { value: i + 1 + ((level - 1) * 30), isInput: false }
    })
      .map(({ value, isInput }) => {
        if (this.randomNumbers.includes(value)) isInput = true;
        return { value, isInput }
      })
  }
}

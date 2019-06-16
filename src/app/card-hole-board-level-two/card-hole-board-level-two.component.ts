import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-hole-board-level-two",
  templateUrl: "./card-hole-board-level-two.component.html",
  styleUrls: ["./card-hole-board-level-two.component.scss"]
})
export class CardHoleBoardLevelTwoComponent implements OnInit {
  boardNumbers = [
    { value: 1, checked: false },
    { value: 2, checked: false },
    { value: 3, checked: false },
    { value: 4, checked: false },
    { value: 5, checked: false },
    { value: 6, checked: false },
    { value: 7, checked: false },
    { value: 8, checked: false },
    { value: 9, checked: false },
    { value: 10, checked: false }
  ];

  _getNewBoardNumbers = () => {
    return this.boardNumbers.slice(-10).map(({ value }) => {
      return { value: value + 10, checked: false };
    });
  };

  checkFinish = ({ number: { value, checked }, previousContainer }) => {
    this.boardNumbers = this.boardNumbers.map(number => {
      if (number.value === value) number.checked = checked;
      return number;
    });
    const isFinish = this.boardNumbers.every(({ checked }) => {
      return checked === true;
    });
    if (isFinish) {
      const newBoardNumbers = this._getNewBoardNumbers();
      if (this.boardNumbers.length > 10) this.boardNumbers.splice(0, 10);
      this.boardNumbers.push(...newBoardNumbers);
      previousContainer.data.push(...newBoardNumbers);
    }
  };

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-hole-board",
  templateUrl: "./card-hole-board.component.html",
  styleUrls: ["./card-hole-board.component.scss"]
})
export class CardHoleBoardComponent implements OnInit {
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

  boardNumbers2 = [
    { value: 11, checked: false },
    { value: 12, checked: false },
    { value: 13, checked: false },
    { value: 14, checked: false },
    { value: 15, checked: false },
    { value: 16, checked: false },
    { value: 17, checked: false },
    { value: 18, checked: false },
    { value: 19, checked: false },
    { value: 20, checked: false }
  ];

  checkFinish = ({ number: { value, checked }, previousContainer }) => {
    this.boardNumbers = this.boardNumbers.map(number => {
      if (number.value === value) number.checked = checked;
      return number;
    });
    const isFinish = this.boardNumbers.every(({ checked }) => {
      return checked === true;
    });
    if (isFinish) {
      this.boardNumbers.push(...this.boardNumbers2);
      previousContainer.data.push(...this.boardNumbers2);
    }
  };

  constructor() {}

  ngOnInit() {}
}

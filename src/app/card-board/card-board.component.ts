import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-board",
  templateUrl: "./card-board.component.html",
  styleUrls: ["./card-board.component.scss"]
})
export class CardBoardComponent implements OnInit {
  constructor() {}

  numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit() {}
}

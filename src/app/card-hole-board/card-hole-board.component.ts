import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-hole-board",
  templateUrl: "./card-hole-board.component.html",
  styleUrls: ["./card-hole-board.component.scss"]
})
export class CardHoleBoardComponent implements OnInit {
  boardNumbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-card-board",
  templateUrl: "./card-board.component.html",
  styleUrls: ["./card-board.component.scss"]
})
export class CardBoardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  numberList = [
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

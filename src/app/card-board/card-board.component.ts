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

  numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

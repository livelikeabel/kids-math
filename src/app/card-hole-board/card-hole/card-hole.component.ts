import { Component, OnInit, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-card-hole",
  templateUrl: "./card-hole.component.html",
  styleUrls: ["./card-hole.component.scss"]
})
export class CardHoleComponent implements OnInit {
  @Input() holeNumber: number;
  hole = [];

  constructor() {}

  ngOnInit() {}

  validateDragCondition = e =>
    this.hole.length >= 1 ||
    e.previousContainer.data[e.previousIndex] !== this.holeNumber;

  drop(event: CdkDragDrop<string[]>) {
    if (this.validateDragCondition(event)) return;
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

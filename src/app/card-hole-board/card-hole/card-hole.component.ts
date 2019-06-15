import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  @Input() holeNumber: object;
  @Output() finishEvent = new EventEmitter();

  hole = [];

  constructor() {}

  ngOnInit() {}

  _checkFinish = previousContainer => {
    this.finishEvent.emit({ number: this.hole[0], previousContainer });
  };

  validateDragCondition = e => {
    return (
      this.hole.length >= 1 ||
      e.previousContainer.data[e.previousIndex].value !== this.holeNumber.value
    );
  };

  drop(event: CdkDragDrop<string[]>) {
    const { previousContainer, previousIndex, container, currentIndex } = event;
    if (this.validateDragCondition(event)) return;
    if (previousContainer === container) {
      moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      previousContainer.data[previousIndex].checked = true;
      transferArrayItem(
        previousContainer.data,
        event.container.data,
        previousIndex,
        currentIndex
      );
    }
    this._checkFinish(previousContainer);
  }
}

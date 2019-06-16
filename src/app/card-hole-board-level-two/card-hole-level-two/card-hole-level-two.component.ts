import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-card-hole-level-two",
  templateUrl: "./card-hole-level-two.component.html",
  styleUrls: ["./card-hole-level-two.component.scss"]
})
export class CardHoleLevelTwoComponent implements OnInit {
  @Input() holeNumber;
  @Output() finishEvent = new EventEmitter();

  hole = [];

  constructor() {}

  ngOnInit() {}

  _checkFinish = previousContainer => {
    this.finishEvent.emit({ number: this.hole[0], previousContainer });
  };

  validateDragCondition = e => {
    const { value } = this.holeNumber;
    return (
      this.hole.length >= 1 ||
      e.previousContainer.data[e.previousIndex].value !== value
    );
  };

  // drop(event: CdkDragDrop<string[]>) {
  drop(event) {
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

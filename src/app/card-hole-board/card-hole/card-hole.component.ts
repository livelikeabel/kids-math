import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-hole",
  templateUrl: "./card-hole.component.html",
  styleUrls: ["./card-hole.component.scss"]
})
export class CardHoleComponent implements OnInit {
  @Input() holeNumber: number;

  constructor() {}

  ngOnInit() {}
}

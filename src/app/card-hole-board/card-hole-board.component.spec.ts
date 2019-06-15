import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardHoleBoardComponent } from "./card-hole-board.component";

describe("CardHoleBoardComponent", () => {
  let component: CardHoleBoardComponent;
  let fixture: ComponentFixture<CardHoleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardHoleBoardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

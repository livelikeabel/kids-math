import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoleBoardLevelTwoComponent } from './card-hole-board-level-two.component';

describe('CardHoleBoardLevelTwoComponent', () => {
  let component: CardHoleBoardLevelTwoComponent;
  let fixture: ComponentFixture<CardHoleBoardLevelTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHoleBoardLevelTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoleBoardLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

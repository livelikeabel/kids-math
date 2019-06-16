import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoleLevelTwoComponent } from './card-hole-level-two.component';

describe('CardHoleLevelTwoComponent', () => {
  let component: CardHoleLevelTwoComponent;
  let fixture: ComponentFixture<CardHoleLevelTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHoleLevelTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoleLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoleComponent } from './card-hole.component';

describe('CardHoleComponent', () => {
  let component: CardHoleComponent;
  let fixture: ComponentFixture<CardHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

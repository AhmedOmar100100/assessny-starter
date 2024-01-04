import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSliderComponent } from './board-slider.component';

describe('BoardSliderComponent', () => {
  let component: BoardSliderComponent;
  let fixture: ComponentFixture<BoardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

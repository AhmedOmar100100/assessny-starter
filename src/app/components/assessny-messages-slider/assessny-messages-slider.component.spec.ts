import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessnyMessagesSliderComponent } from './assessny-messages-slider.component';

describe('AssessnyMessagesSliderComponent', () => {
  let component: AssessnyMessagesSliderComponent;
  let fixture: ComponentFixture<AssessnyMessagesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessnyMessagesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessnyMessagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

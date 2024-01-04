import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMsgsSliderComponent } from './teacher-msgs-slider.component';

describe('TeacherMsgsSliderComponent', () => {
  let component: TeacherMsgsSliderComponent;
  let fixture: ComponentFixture<TeacherMsgsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherMsgsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMsgsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

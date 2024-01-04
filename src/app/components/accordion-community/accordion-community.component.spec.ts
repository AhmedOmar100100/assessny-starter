import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCommunityComponent } from './accordion-community.component';

describe('AccordionCommunityComponent', () => {
  let component: AccordionCommunityComponent;
  let fixture: ComponentFixture<AccordionCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathSolutionsComponent } from './math-solutions.component';

describe('MathSolutionsComponent', () => {
  let component: MathSolutionsComponent;
  let fixture: ComponentFixture<MathSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTaskComponent } from './general-task.component';

describe('GeneralTaskComponent', () => {
  let component: GeneralTaskComponent;
  let fixture: ComponentFixture<GeneralTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

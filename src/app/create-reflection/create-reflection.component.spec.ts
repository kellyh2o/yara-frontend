import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { CreateReflectionComponent } from './create-reflection.component';

describe('CreateReflectionComponent', () => {
  let component: CreateReflectionComponent;
  let fixture: ComponentFixture<CreateReflectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReflectionComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

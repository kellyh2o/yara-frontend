import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CreateReflectionComponent } from './create-reflection.component';
import { ApplicationState } from '../store/models/application-state.model';
import { Mock } from 'protractor/built/driverProviders';
import { saveNewReflection, cancelNewReflection } from '../store';

describe('CreateReflectionComponent', () => {
  let component: CreateReflectionComponent;
  let fixture: ComponentFixture<CreateReflectionComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReflectionComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReflectionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  // todo: test this?
});

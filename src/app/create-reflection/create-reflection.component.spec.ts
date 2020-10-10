import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CreateReflectionComponent } from './create-reflection.component';
import { ReflectionsFacade } from '../reflections/reflections.facade';
import { ApplicationState } from '../store/models/application-state.model';
import { createNewReflection } from '../reflections/store';

const MockReflectionsFacade = {
  createReflection: (title: string, text: string) => null,
};

describe('CreateReflectionComponent', () => {
  let component: CreateReflectionComponent;
  let fixture: ComponentFixture<CreateReflectionComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReflectionComponent],
      providers: [{ provide: ReflectionsFacade, useValue: MockReflectionsFacade }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReflectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should do something1', (done) => {
    component.ngOnInit();

    const dispatchSpy = spyOn(store, 'dispatch');
    const action = createNewReflection({ title: '', text: ''});

    component.submit();

    expect(dispatchSpy).toHaveBeenCalledWith(action);

  });

  it('should do something2', (done) => {
    component.ngOnInit();

    const dispatchSpy = spyOn(store, 'dispatch');
    const action = createNewReflection({ title: '', text: ''});

    component.submit();


    expect(MockReflectionsFacade.createReflection).toHaveBeenCalled();
  })
});

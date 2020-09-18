import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';

import { MemoizedSelector } from '@ngrx/store';
import { ReflectionState } from '../store/state/reflection-state.model';
import { getShowReflections, getShowNewReflectionForm } from '../store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStore: MockStore;
  let mockGetShowReflectionsSelector: MemoizedSelector<ReflectionState, boolean>;
  let mockGetShowNewReflectionSelector: MemoizedSelector<ReflectionState, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    mockStore = TestBed.inject(MockStore);
    mockGetShowReflectionsSelector = mockStore.overrideSelector(getShowReflections, false);
    mockGetShowNewReflectionSelector = mockStore.overrideSelector(getShowNewReflectionForm, false);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('showReflections should return true if getShowReflections returns true', (done) => {
    mockGetShowReflectionsSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showReflections$.subscribe((showReflections) => {
      expect(showReflections).toBeTruthy();
      done();
    });
  });

  it('showReflections should return false if getShowReflections returns false', (done) => {
    mockGetShowReflectionsSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showReflections$.subscribe((showReflections) => {
      expect(showReflections).toBeFalsy();
      done();
    });
  });

  it('showNewReflectionForm should return true if getShowNewReflectionForm returns true', (done) => {
    mockGetShowNewReflectionSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showNewReflectionForm$.subscribe((showReflections) => {
      expect(showReflections).toBeTruthy();
      done();
    });
  });

  it('showNewReflectionForm should return false if getShowNewReflectionForm returns false', (done) => {
    mockGetShowNewReflectionSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showNewReflectionForm$.subscribe((showReflections) => {
      expect(showReflections).toBeFalsy();
      done();
    });
  });

});


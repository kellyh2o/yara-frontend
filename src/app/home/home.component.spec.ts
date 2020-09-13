import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';

import { MemoizedSelector } from '@ngrx/store';
import { JournalState } from '../store/state/journal-state.model';
import { getShowEntries, getShowNewEntryForm } from '../store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockStore: MockStore;
  let mockGetShowEntriesSelector: MemoizedSelector<JournalState, boolean>;
  let mockGetShowNewEntrySelector: MemoizedSelector<JournalState, boolean>;

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
    mockGetShowEntriesSelector = mockStore.overrideSelector(getShowEntries, false);
    mockGetShowNewEntrySelector = mockStore.overrideSelector(getShowNewEntryForm, false);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('showEntries should return true if getShowEntries returns true', (done) => {
    mockGetShowEntriesSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showEntries$.subscribe((showEntries) => {
      expect(showEntries).toBeTruthy();
      done();
    });
  });

  it('showEntries should return false if getShowEntries returns false', (done) => {
    mockGetShowEntriesSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showEntries$.subscribe((showEntries) => {
      expect(showEntries).toBeFalsy();
      done();
    });
  });

  it('showNewEntryForm should return true if getShowNewEntryForm returns true', (done) => {
    mockGetShowNewEntrySelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showNewEntryForm$.subscribe((showEntries) => {
      expect(showEntries).toBeTruthy();
      done();
    });
  });

  it('showNewEntryForm should return false if getShowNewEntryForm returns false', (done) => {
    mockGetShowNewEntrySelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showNewEntryForm$.subscribe((showEntries) => {
      expect(showEntries).toBeFalsy();
      done();
    });
  });

});


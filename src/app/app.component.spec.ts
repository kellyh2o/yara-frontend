import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { MemoizedSelector } from '@ngrx/store';
import { AuthState } from './store/state/auth-state.model';
import { getIsAuth, getShowLogin } from './store';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore;
  let mockGetIsAuthSelector: MemoizedSelector<AuthState, boolean>;
  let mockGetShowLoginSelector: MemoizedSelector<AuthState, boolean>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    mockStore = TestBed.inject(MockStore);
    mockGetIsAuthSelector = mockStore.overrideSelector(getIsAuth, false);
    mockGetShowLoginSelector = mockStore.overrideSelector(getShowLogin, false);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('isAuth should return false if the user is not logged in', (done) => {
    mockGetIsAuthSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.isAuth$.subscribe((isAuth) => {
      expect(isAuth).toBeFalsy();
      done();
    });
  });

  it('isAuth should return true if the user is not logged in', (done) => {
    mockGetIsAuthSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.isAuth$.subscribe((isAuth) => {
      expect(isAuth).toBeTruthy();
      done();
    });
  });

  it('showLogin should return false if the user is logged in', (done) => {
    mockGetShowLoginSelector.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showLogin$.subscribe((showLogin) => {
      expect(showLogin).toBeFalsy();
      done();
    });
  });

  it('showLogin should return true if the user is not logged in', (done) => {
    mockGetShowLoginSelector.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    component.showLogin$.subscribe((showLogin) => {
      expect(showLogin).toBeTruthy();
      done();
    });
  });
});
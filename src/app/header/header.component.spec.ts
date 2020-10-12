import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';
import { UserFacade } from '../store/facades/user.facade';
import { initialState } from '../store/reducers/auth.reducer';



const MockUserFacade = {
  isAuth$: of(false),
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: UserFacade, useValue: MockUserFacade }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should subscribe to isAuth from the user facade', (done) => {
    component.ngOnInit();
    component.isAuth$.subscribe((isAuth) => {
      expect(isAuth).toEqual(initialState.isAuth);
      done();
    });
  });
});

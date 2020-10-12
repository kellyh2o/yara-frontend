import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { children: [{ url: [''] }] }, data: {} },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Y A R A');
  });

  it('should display an array of links', () => {
    const links = [
      { title: 'Reflections', fragment: '/reflections' },
      { title: 'Create Reflection', fragment: '/reflections/create'}
    ];

    expect(component.links).toEqual(links);
  });
});

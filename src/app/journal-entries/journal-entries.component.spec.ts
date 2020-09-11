import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntriesComponent } from './journal-entries.component';

describe('JournalEntriesComponent', () => {
  let component: JournalEntriesComponent;
  let fixture: ComponentFixture<JournalEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a page title', () => {
    expect(component.pageTitle).toBe('Journal Entries');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntriesComponent } from './journal-entries.component';
import { ENTRIES } from './journal-entries';

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

  it('should display a list of journal entries', () => {
    expect(component.journalEntries).toEqual(ENTRIES)
  })
});

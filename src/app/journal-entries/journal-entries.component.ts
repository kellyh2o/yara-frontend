import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { ENTRIES, JournalEntry } from './journal-entries';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare
} from './components/directives/sortable-header.directive';


@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.scss']
})
export class JournalEntriesComponent implements OnInit {

  pageTitle: 'Journal Entries';
  journalEntries: JournalEntry[] = ENTRIES;

  @ViewChildren(SortableHeaderDirective) headers: QueryList<
    SortableHeaderDirective
  >;

  constructor() {}

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = SortDirection.DEFAULT;
      }
    });

    // sorting heroes
    if (direction === '' || column === '') {
      this.journalEntries = ENTRIES;
    } else {
      this.journalEntries = [...ENTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === SortDirection.ASC ? res : -res;
      });
    }
  }
}

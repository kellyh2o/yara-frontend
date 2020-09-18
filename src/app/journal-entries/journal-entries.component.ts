import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { JournalEntry } from '../models/journal-entry.model';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare
} from './components/directives/sortable-header.directive';
import { JournalService } from '../services/journal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.scss']
})
export class JournalEntriesComponent implements OnInit {

  journalEntries$: Observable<JournalEntry[]>;

  // @ViewChildren(SortableHeaderDirective) headers: QueryList<
  //   SortableHeaderDirective
  // >;

  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalEntries$ = this.journalService.getJournalEntries();
  }

  onSort({ column, direction }: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach((header) => {
  //     if (header.sortable !== column) {
  //       header.direction = SortDirection.DEFAULT;
  //     }
  //   });

  //   // sorting heroes
  //   if (direction === '' || column === '') {
  //     this.journalEntries = ENTRIES;
  //   } else {
  //     this.journalEntries = [...ENTRIES].sort((a, b) => {
  //       const res = compare(a[column], b[column]);
  //       return direction === SortDirection.ASC ? res : -res;
  //     });
  //   }
  }
}

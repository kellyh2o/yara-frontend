import { Injectable } from '@angular/core';
import { JournalEntry, ENTRIES } from '../journal-entries/journal-entries';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor() { }

  getJournalEntries(): Observable<JournalEntry[]> {
    return of(ENTRIES);
  }
}

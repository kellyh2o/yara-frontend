import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JournalResponse } from '../services/journal-response.model'; 
import { Guid } from 'guid-typescript';

const BASE_URL = 'http://localhost:3000/api';
const JOURNAL_ENTRIES_URL = `${BASE_URL}/entries`;

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  constructor(private http: HttpClient) { }

  getJournalEntries(): Observable<JournalResponse[]> {
    return this.http.get<JournalResponse[]>(JOURNAL_ENTRIES_URL);
  }

  getJournalEntry(entryId: Guid): Observable<JournalResponse[]> {
    return this.http.get<JournalResponse[]>(`${JOURNAL_ENTRIES_URL}/${entryId}`);
  }

  createJournalEntry(title, text, type): Observable<JournalResponse> {
    return this.http.post<JournalResponse>(JOURNAL_ENTRIES_URL, {
      title,
      text,
      type
    });
  }

  // getJournalEntries(): Observable<JournalEntry[]> {
  //   return of(ENTRIES);
  // }
}

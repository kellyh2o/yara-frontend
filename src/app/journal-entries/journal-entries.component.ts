import { Component, OnInit, Input } from '@angular/core';
import { JournalEntry } from '../../models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.scss']
})
export class JournalEntriesComponent implements OnInit {

  @Input() journalEntries: JournalEntry[]


  constructor() { }

  ngOnInit(): void {
  }

}

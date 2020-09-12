import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/state/application-state.model';
import { getShowEntries, getShowNewEntryForm } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  showEntries$: Observable<boolean>;
  showNewEntryForm$: Observable<boolean>;

  constructor(private store$: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.showEntries$ = this.store$.pipe(select(getShowEntries));
    this.showNewEntryForm$ = this.store$.pipe(select(getShowNewEntryForm));
  }
}
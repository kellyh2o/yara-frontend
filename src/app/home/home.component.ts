import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state.model';
import { getShowReflections, getShowNewReflectionForm } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  showReflections$: Observable<boolean>;
  showNewReflectionForm$: Observable<boolean>;

  constructor(private store$: Store<ApplicationState>) {}

  ngOnInit(): void {
    this.showReflections$ = this.store$.pipe(select(getShowReflections));
    this.showNewReflectionForm$ = this.store$.pipe(select(getShowNewReflectionForm));
  }
}
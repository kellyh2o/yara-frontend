import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/models/application-state.model';
import { createNewReflection } from '../../store';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  title = 'Y A R A';

  constructor(private store$: Store<ApplicationState>) {}

  ngOnInit(): void {}

  submit() {
    this.store$.dispatch(createNewReflection());
  }
}

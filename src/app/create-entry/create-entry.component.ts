import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/state/application-state.model';
import { saveNewEntry, cancelNewEntry } from '../store';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss']
})
export class CreateEntryComponent implements OnInit {

  newEntryForm: FormGroup;

  constructor(private store$: Store<ApplicationState>) { }

  ngOnInit(): void {
  }

  submit() {
    this.store$.dispatch(saveNewEntry());
  }

  cancel() {
    this.store$.dispatch(cancelNewEntry());
  }

}

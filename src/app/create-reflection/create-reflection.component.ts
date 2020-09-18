import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/state/application-state.model';
import { saveNewReflection, cancelNewReflection } from '../store';

@Component({
  selector: 'app-create-reflection',
  templateUrl: './create-reflection.component.html',
  styleUrls: ['./create-reflection.component.scss']
})
export class CreateReflectionComponent implements OnInit {

  newReflectionForm: FormGroup;

  constructor(private fb: FormBuilder, private store$: Store<ApplicationState>) {
    this.newReflectionForm = this.fb.group({
      reflection: ''
    })
   }

  ngOnInit(): void {
  }

  submit() {
    this.store$.dispatch(saveNewReflection());
  }

  cancel() {
    this.store$.dispatch(cancelNewReflection());
  }

}

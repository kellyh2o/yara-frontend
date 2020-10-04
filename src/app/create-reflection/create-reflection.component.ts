import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReflectionsFacade } from '../reflections/reflections.facade';

@Component({
  selector: 'app-create-reflection',
  templateUrl: './create-reflection.component.html',
  styleUrls: ['./create-reflection.component.scss']
})
export class CreateReflectionComponent implements OnInit {

  newReflectionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reflectionsFacade: ReflectionsFacade
    ) {}

    ngOnInit() : void {
      this.newReflectionForm = this.fb.group({
        title: '',
        text: '',
      });
    }
  
    submit() : void {
      const { title, text } = this.newReflectionForm.value;
      this.reflectionsFacade.createReflection(title, text);
    }

  cancel() {
    //this.store$.dispatch(cancelNewReflection());
  }
}

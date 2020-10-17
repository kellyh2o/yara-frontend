import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFacade } from '../store/facades/user.facade';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: '',
      username: '',
      password: '',
    });
  }

  submit() {
    const { email, username, password } = this.registerForm.value;
    this.userFacade.register(email, username, password);
  }
}

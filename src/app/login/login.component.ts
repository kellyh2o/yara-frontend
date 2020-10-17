import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFacade } from '../store/facades/user.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userFacade: UserFacade,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  submit() {
    const { username, password } = this.loginForm.value;
    this.userFacade.login(username, password);
  }
}

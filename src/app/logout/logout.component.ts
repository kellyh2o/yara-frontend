import { Component, OnInit } from '@angular/core';
import { UserFacade } from '../store/facades/user.facade';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
  }

  submit() {
    this.userFacade.logout();
  }
}

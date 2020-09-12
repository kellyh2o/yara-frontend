import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface NavLinks {
  title: string;
  fragment: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  title = 'Y A R A';
  links: NavLinks[] = [{ title: 'Dashboard', fragment: '/' }, { title: 'Create New', fragment: '/'}];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}

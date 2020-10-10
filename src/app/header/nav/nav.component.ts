import { Component, Input } from '@angular/core';
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
export class NavComponent {
  @Input() isAuth: boolean;

  title = 'Y A R A';
  links: NavLinks[] = [
    { title: 'Dashboard', fragment: '/' },
    { title: 'Reflections', fragment: '/reflections' },
    { title: 'Create Reflection', fragment: '/reflections/create' }
  ];

  constructor(public route: ActivatedRoute) {}
}

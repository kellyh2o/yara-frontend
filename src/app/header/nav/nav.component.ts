// import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { ApplicationState } from '../../store/models/application-state.model';
// import { addReflection } from '../../store';


// @Component({
//   selector: 'app-nav',
//   templateUrl: './nav.component.html',
//   styleUrls: ['./nav.component.scss'],
// })
// export class NavComponent implements OnInit {
//   title = 'Y A R A';

//   constructor(private store$: Store<ApplicationState>) {}

//   ngOnInit(): void {}

//   submit() {
//     this.store$.dispatch(addReflection());
//   }
// }
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
  links: NavLinks[] = [
    { title: 'Dashboard', fragment: '/' },
    { title: 'Reflections', fragment: '/reflections' },
    { title: 'Login', fragment: '/login' },
  ];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../store/models/application-state.model';
import { getShowReflections, getShowNewReflectionForm } from '../store';
import { Observable } from 'rxjs';
import { Reflection } from '../models/reflection.model';
import { ReflectionsFacade } from '../reflections/reflections.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  reflections$: Observable<Reflection[]>;
  showReflections$: Observable<boolean>;
  showNewReflectionForm$: Observable<boolean>;

  constructor(private reflectionsFacade: ReflectionsFacade) {}

  ngOnInit(): void {

    this.reflections$ = this.reflectionsFacade.reflections$;
    this.showReflections$ = this.reflectionsFacade.showReflections$;
    this.showNewReflectionForm$ = this.reflectionsFacade.showNewReflectionForm;

    this.reflectionsFacade.loadReflections();
  }
}
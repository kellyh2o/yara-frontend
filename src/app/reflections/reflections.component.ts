import { Component, OnInit } from '@angular/core';
import { Reflection } from './models/reflection.model';
import { Observable } from 'rxjs';
import { ReflectionsFacade } from './reflections.facade';

@Component({
  selector: 'app-reflections',
  templateUrl: './reflections.component.html',
  styleUrls: ['./reflections.component.scss']
})
export class ReflectionsComponent implements OnInit {
  reflections$: Observable<Reflection[]>;

  constructor(private reflectionsFacade: ReflectionsFacade) {}

  ngOnInit(): void {
    this.reflections$ = this.reflectionsFacade.reflections$;
    this.reflectionsFacade.loadReflections();
  }
}

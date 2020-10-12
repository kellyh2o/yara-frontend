import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/models/application-state.model';
import { getSelectedReflection } from '../store/selectors';
import { Observable } from 'rxjs';
import { Reflection } from '../models/reflection.model';

@Component({
  selector: 'app-reflection-details',
  templateUrl: 'reflection-details.component.html',
  styleUrls: ['reflection-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReflectionDetailsComponent implements OnInit {
  reflection$: Observable<Reflection>;

  constructor(private store: Store<ApplicationState>) {}

  ngOnInit() {
    this.reflection$ = this.store.select(getSelectedReflection);
  }
}

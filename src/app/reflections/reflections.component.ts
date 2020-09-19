import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Reflection } from '../models/reflection.model';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare
} from './components/directives/sortable-header.directive';
import { ReflectionService } from '../services/reflection.service';
import { Observable } from 'rxjs';
import { ApplicationState } from '../store/models/application-state.model';
import { Store } from '@ngrx/store';
import { getReflections, requestReflections } from '../store';

@Component({
  selector: 'app-reflections',
  templateUrl: './reflections.component.html',
  styleUrls: ['./reflections.component.scss']
})
export class ReflectionsComponent implements OnInit {

  reflections$: Observable<Reflection[]>;

  // @ViewChildren(SortableHeaderDirective) headers: QueryList<
  //   SortableHeaderDirective
  // >;

  constructor(
    private reflectionService: ReflectionService,
    private store$: Store<ApplicationState>
    ) {}

  ngOnInit(): void {
    this.reflections$ = this.store$.select(getReflections);
    this.store$.dispatch(requestReflections())
  }

  onSort({ column, direction }: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach((header) => {
  //     if (header.sortable !== column) {
  //       header.direction = SortDirection.DEFAULT;
  //     }
  //   });

  //   // sorting heroes
  //   if (direction === '' || column === '') {
  //     this.journalEntries = ENTRIES;
  //   } else {
  //     this.journalEntries = [...ENTRIES].sort((a, b) => {
  //       const res = compare(a[column], b[column]);
  //       return direction === SortDirection.ASC ? res : -res;
  //     });
  //   }
  }
}

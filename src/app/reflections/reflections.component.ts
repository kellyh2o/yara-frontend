import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Reflection } from '../models/reflection.model';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare
} from './components/directives/sortable-header.directive';
import { Observable } from 'rxjs';
import { ReflectionsFacade } from './reflections.facade';

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

  constructor(private reflectionsFacade: ReflectionsFacade) {}

  ngOnInit(): void {
    this.reflections$ = this.reflectionsFacade.reflections$;
    this.reflectionsFacade.loadReflections();
  }

  onSort({ column, direction }: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach((header) => {
  //     if (header.sortable !== column) {
  //       header.direction = SortDirection.DEFAULT;
  //     }
  //   });

  //   // sorting reflections
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

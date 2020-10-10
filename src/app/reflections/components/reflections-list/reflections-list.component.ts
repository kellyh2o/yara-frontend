import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Reflection } from '../../models/reflection.model';
import {
  SortableHeaderDirective,
  SortEvent,
  SortDirection,
  compare
} from '../directives/sortable-header.directive';
import { Observable } from 'rxjs';
import { ReflectionsFacade } from '../../reflections.facade';

@Component({
  selector: 'app-reflections-list',
  templateUrl: './reflections-list.component.html',
  styleUrls: ['./reflections-list.component.scss']
})
export class ReflectionsListComponent implements OnInit {
    @Input() reflections: Reflection[];

  // @ViewChildren(SortableHeaderDirective) headers: QueryList<
  //   SortableHeaderDirective
  // >;

  constructor() {}

  ngOnInit(): void {}

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

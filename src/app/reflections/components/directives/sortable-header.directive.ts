import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { Reflection } from '../../models/reflection.model';
import { Guid } from 'guid-typescript';

export type SortColumn = keyof Reflection | '';
// export type SortDirection = 'asc' | 'desc' | '';
export const enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = '',
}
const rotate: { [key: string]: SortDirection } = {
  asc: SortDirection.DESC,
  desc: SortDirection.DEFAULT,
  '': SortDirection.ASC,
};

export const compare = (v1: string | number | Date | Guid, v2: string | number | Date | Guid) =>
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}
@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class SortableHeaderDirective {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = SortDirection.DEFAULT;
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

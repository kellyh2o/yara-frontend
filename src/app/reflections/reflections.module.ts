import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflectionsComponent } from './reflections.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';

const components = [ReflectionsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SortableHeaderModule],
  exports: [...components],
})
export class ReflectionsModule {}

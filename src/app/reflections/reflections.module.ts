import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflectionsComponent } from './reflections.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';
import { ReflectionDetailsComponent } from './reflection-details/reflection-details.component';

const components = [ReflectionsComponent];

@NgModule({
  declarations: [...components, ReflectionDetailsComponent],
  imports: [CommonModule, SortableHeaderModule],
  exports: [...components],
})
export class ReflectionsModule {}

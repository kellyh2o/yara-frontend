import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflectionsRoutingModule } from './reflections-routing.module';
import { ReflectionsComponent } from './reflections.component';
import { ReflectionsListComponent } from './components/reflections-list/reflections-list.component';
import { ReflectionDetailsComponent } from './reflection-details/reflection-details.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';

const components = [ReflectionsComponent, ReflectionsListComponent, ReflectionDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReflectionsRoutingModule, SortableHeaderModule],
  exports: [...components],
})
export class ReflectionsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReflectionsComponent } from './reflections.component';
import { ReflectionDetailsComponent } from './reflection-details/reflection-details.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';
import { RouterModule } from '@angular/router';


const components = [ReflectionsComponent, ReflectionDetailsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule, SortableHeaderModule],
  exports: [...components],
})
export class ReflectionsModule {}

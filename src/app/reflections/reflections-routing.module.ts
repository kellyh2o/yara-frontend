import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReflectionsGuard } from './reflections.guard';
import { ReflectionsComponent } from './reflections.component';
import { ReflectionDetailsComponent } from './reflection-details/reflection-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReflectionsComponent,
  },
  {
    path: 'reflections/:reflectionId',
    component: ReflectionDetailsComponent,
    canActivate: [ReflectionsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReflectionsRoutingModule {}

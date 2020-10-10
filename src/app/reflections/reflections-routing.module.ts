import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReflectionsGuard } from './reflections.guard';
import { ReflectionsComponent } from './reflections.component';
import { ReflectionDetailsComponent } from './reflection-details/reflection-details.component';
import { CreateReflectionComponent } from '../create-reflection/create-reflection.component';

const routes: Routes = [
  {
    path: '',
    component: ReflectionsComponent,
  },
  {
    path: 'create',
    component: CreateReflectionComponent
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

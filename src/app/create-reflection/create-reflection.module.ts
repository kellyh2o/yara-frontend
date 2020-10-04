import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CreateReflectionComponent } from './create-reflection.component';

const components = [CreateReflectionComponent];

const routes: Routes = [
  {
    path: '',
    component: CreateReflectionComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [...components],
})
export class CreateReflectionModule {}

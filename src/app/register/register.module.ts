import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

const components = [RegisterComponent];

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [...components],
})
export class RegisterModule {}

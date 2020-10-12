import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LogoutComponent } from './logout.component';

const components = [LogoutComponent];

const routes: Routes = [
  {
    path: '',
    component: LogoutComponent,
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [...components],
})
export class LogoutModule {}

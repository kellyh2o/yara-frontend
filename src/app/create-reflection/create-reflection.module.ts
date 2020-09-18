import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateReflectionComponent } from './create-reflection.component';

const components = [CreateReflectionComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...components],
})
export class CreateReflectionModule {}

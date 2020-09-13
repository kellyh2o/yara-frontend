import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEntryComponent } from './create-entry.component';

const components = [CreateEntryComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [...components],
})
export class CreateEntryModule {}

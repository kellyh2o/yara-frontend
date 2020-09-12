import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEntryComponent } from './create-entry.component';

const components = [CreateEntryComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class CreateEntryModule {}

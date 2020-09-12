import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalEntriesComponent } from './journal-entries.component';

import { SortableHeaderModule } from './components/directives/sortable-header.module';

const components = [JournalEntriesComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SortableHeaderModule],
  exports: [...components],
})
export class JournalEntriesModule {}

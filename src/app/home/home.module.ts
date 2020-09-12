import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { JournalEntriesModule } from '../journal-entries/journal-entries.module';
import { CreateEntryModule } from '../create-entry/create-entry.module';

const components = [HomeComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, JournalEntriesModule, CreateEntryModule],
  exports: [...components],
})
export class HomeModule {}

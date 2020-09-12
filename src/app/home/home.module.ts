import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { JournalEntriesModule } from '../journal-entries/journal-entries.module';

const components = [HomeComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, JournalEntriesModule],
  exports: [...components],
})
export class HomeModule {}

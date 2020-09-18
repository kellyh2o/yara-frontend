import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { ReflectionsModule } from '../reflections/reflections.module';
import { CreateReflectionModule } from '../create-reflection/create-reflection.module';

const components = [HomeComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ReflectionsModule, CreateReflectionModule],
  exports: [...components],
})
export class HomeModule {}

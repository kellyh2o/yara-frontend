import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReflectionsComponent } from './reflections/reflections.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { ReflectionsGuard } from './reflections/reflections.guard';

import { ReflectionDetailsComponent } from './reflections/reflection-details/reflection-details.component';

const routes: Routes = [
  {
    path: 'reflections/:reflectionId',
    component: ReflectionDetailsComponent,
    canActivate: [ReflectionsGuard],
  },
  {
    path: 'reflections',
    component: ReflectionsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { 
  appState, 
  AuthEffects, 
  CustomSerializer, 
  RouterEffects } from './store';
import { ReflectionsEffects } from './reflections/store';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appState),
    StoreDevtoolsModule.instrument({ maxAge: false }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    EffectsModule.forRoot([RouterEffects, AuthEffects, ReflectionsEffects])
  ],
})
export class NgrxModule {}



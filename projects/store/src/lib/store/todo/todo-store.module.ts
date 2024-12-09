import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './todo.effects';
import { todoReducer } from './todo.reducer';

@NgModule({
    imports: [
      StoreModule.forFeature( 'todos' , todoReducer),
      EffectsModule.forFeature([TodoEffects])
    ],
    exports: [StoreModule]
  })
  export class TodoStoreModule  {
  }


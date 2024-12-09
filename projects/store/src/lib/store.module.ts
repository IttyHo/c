import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo/todo.effects';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [StoreComponent],
  imports: [
  ],
  exports: [StoreComponent]
})
export class StoreLibModule { }

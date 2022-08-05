import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { appReducers } from './app.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot(appReducers), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
})
export class AppStoreModule {}

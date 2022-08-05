import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './store/store.module';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/app.effects';
import { HackerNewsModule } from './modules/hacker-news/hacker-news.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AppStoreModule,
    EffectsModule.forRoot(effects),
    HackerNewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

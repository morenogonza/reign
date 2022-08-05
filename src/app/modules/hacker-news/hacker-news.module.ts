import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { hackerNewsRoutes } from './hacker-news.routing';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '@shared';
import { ToggleFavsComponent } from './components/toggle-favs/toggle-favs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectNewsComponent } from './components/select-news/select-news.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { DateAgoPipe } from '../../pipes/date-ago.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [MainComponent, HeaderComponent, ToggleFavsComponent, SelectNewsComponent, NewsCardComponent, DateAgoPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MaterialModule,
    // Routing
    RouterModule.forChild(hackerNewsRoutes),
    InfiniteScrollModule,
  ],
})
export class HackerNewsModule {}

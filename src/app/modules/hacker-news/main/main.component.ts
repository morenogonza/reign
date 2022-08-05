import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@store';
import { Hits, HitsGet } from '@news';
import { NewsService } from '../services/news.service';
import { HitsSet } from '../store/news.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {
  hits: Hits[] = [];
  loading$ = new Observable<boolean>();
  toggleFavs$ = new Observable<string>();
  selectNews: string = '';

  throttle = 0;
  distance = 2;
  page = 1;

  constructor(private newsService: NewsService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('news')
      .pipe(
        tap((state) => {
          if (state.toggleFavs === 'all') {
            this.hits = state.hits;
          } else {
            this.hits = this.newsService.getFavorites();
          }
        })
      )
      .subscribe();

    this.loading$ = this.store.select((state) => state.news.loading);
    this.toggleFavs$ = this.store.select((state) => state.news.toggleFavs);

    this.store.select('news').subscribe((state) => {
      this.selectNews = state.selectNews;
    });
  }

  onScroll(): void {
    console.log('VIENE POR EL SCROLL');
    console.log('PAGE: ', this.page);
    this.store.dispatch(HitsGet({ language: this.selectNews, page: ++this.page }));
  }
}

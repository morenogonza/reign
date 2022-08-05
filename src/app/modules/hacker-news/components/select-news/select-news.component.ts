import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectFavs, SelectNews } from '@news';
import { Store } from '@ngrx/store';
import { AppState } from '@store';
import { HitsGet } from '../../store/news.actions';

@Component({
  selector: 'app-select-news',
  templateUrl: './select-news.component.html',
  styles: [],
})
export class SelectNewsComponent implements OnInit {
  newsSelect: FormControl = new FormControl('', Validators.required);

  newsList: SelectFavs[] = [
    {
      title: 'angular',
      icon: 'src/assets/angular.svg',
    },
    {
      title: 'react',
      icon: 'src/assets/react.svg',
    },
    {
      title: 'vue',
      icon: 'src/assets/vue.svg',
    },
  ];

  constructor(private store: Store<AppState>) {
    this.store.select('news').subscribe((state) => {
      this.newsSelect = new FormControl(state.selectNews, Validators.required);
    });
  }

  ngOnInit(): void {
    this.newsSelect.valueChanges.subscribe((value) => {
      this.store.dispatch(SelectNews({ news: value }));
    });

    this.newsSelect.valueChanges.subscribe((value) => this.store.dispatch(HitsGet({ language: value, page: 1 })));
  }
}

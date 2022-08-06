import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SelectFavs, SelectNews } from '@news';
import { Store } from '@ngrx/store';
import { AppState } from '@store';
import { HitsGet } from '@news';

@Component({
  selector: 'app-select-news',
  templateUrl: './select-news.component.html',
  styles: [],
})
export class SelectNewsComponent {
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

  selectionChange() {
    const language = this.newsSelect.value;
    this.store.dispatch(SelectNews({ news: language }));
    this.store.dispatch(HitsGet({ language, page: 1 }));
  }
}

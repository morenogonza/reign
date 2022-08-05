import { Component, Input, OnInit } from '@angular/core';
import { Hits } from '@news';
import { NewsService } from '@news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styles: [],
})
export class NewsCardComponent implements OnInit {
  @Input() hit!: Hits;
  icon: string = '';

  constructor(private newsService: NewsService) {
    this.icon = 'favorite_outline';
  }

  ngOnInit(): void {
    this.checkIfFavorite();
  }

  addOrRemoveFavorite(): void {
    const response = this.newsService.getFavorites().find((fav) => fav.objectID === this.hit.objectID);
    if (response) {
      this.newsService.removeFavorite(this.hit);
      this.icon = 'favorite_outline';
    } else {
      this.newsService.setFavorite(this.hit);
      this.icon = 'favorite';
    }
  }

  checkIfFavorite(): void {
    const response = this.newsService.getFavorites().find((fav) => fav.objectID === this.hit.objectID);
    if (response) {
      this.icon = 'favorite';
    } else {
      this.icon = 'favorite_outline';
    }
  }

  openLink(): void {
    window.open(this.hit.story_url, '_blank');
  }
}

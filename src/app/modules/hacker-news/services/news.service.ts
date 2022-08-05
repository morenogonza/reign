import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hits, Response } from '@news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private favorites: Hits[] = [];

  constructor(private httpClient: HttpClient) {}

  getData(language: string, page: number): Observable<Response> {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=${language}&page=${page}`;
    return this.httpClient.get<Response>(url);
  }

  setFavorite(hit: Hits): void {
    this.favorites.push(hit);
  }

  getFavorites(): Hits[] {
    return this.favorites;
  }

  removeFavorite(hit: Hits): void {
    this.favorites = this.favorites.filter((fav) => fav.objectID !== hit.objectID);
  }
}

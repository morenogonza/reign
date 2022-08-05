import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HitsGet, Response, NewsService, HitsSet } from '@news';

@Injectable()
export class NewsEffects {
  login$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(HitsGet),
      mergeMap(({ language, page }) => this.newsService.getData(language, page).pipe(map((response: Response) => HitsSet({ response }))))
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}

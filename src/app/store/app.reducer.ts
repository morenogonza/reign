import { ActionReducerMap } from '@ngrx/store';
import { NewsAppState, newsReducer } from '@news';

export interface AppState extends NewsAppState {}

export const appReducers: ActionReducerMap<any> = {
  news: newsReducer,
};

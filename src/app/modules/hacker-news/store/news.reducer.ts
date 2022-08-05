import { createReducer, on } from '@ngrx/store';
import { Hits, ProcessingTimingsMS } from '@news';
import { ToggleFavs, SelectNews, HitsGet, HitsSet } from './news.actions';

export interface NewsState {
  toggleFavs: string;
  selectNews: string;
  loading: boolean;
  hits: Hits[];
  nbHits: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface NewsAppState {
  news: NewsState;
}

const initialState: NewsState = {
  toggleFavs: 'all',
  selectNews: '',
  loading: false,
  hits: [],
  nbHits: 0,
  hitsPerPage: 0,
  exhaustiveNbHits: false,
  exhaustiveTypo: false,
  query: '',
  params: '',
  processingTimeMS: 0,
  processingTimingsMS: {
    afterSearch: {
      format: {
        highlighting: 0,
        total: 0,
      },
      total: 0,
    },
    search: 0,
    total: 0,
  },
};

const _reducer = createReducer(
  initialState,
  on(ToggleFavs, (state, { favs }) => ({
    ...state,
    toggleFavs: favs,
  })),
  on(SelectNews, (state, { news }) => ({
    ...state,
    selectNews: news,
    hits: [],
  })),
  on(HitsGet, (state) => ({
    ...state,
    loading: true,
  })),
  on(HitsSet, (state, { response }) => ({
    ...state,
    loading: false,
    // push new hits to the existing ones
    hits: [...state.hits, ...response.hits],
    nbHits: response.nbHits,
    hitsPerPage: response.hitsPerPage,
    exhaustiveNbHits: response.exhaustiveNbHits,
    exhaustiveTypo: response.exhaustiveTypo,
    query: response.query,
    params: response.params,
    processingTimeMS: response.processingTimeMS,
    processingTimingsMS: response.processingTimingsMS,
  }))
);

export const newsReducer = (state: any, action: any) => _reducer(state, action);

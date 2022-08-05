import { createAction, props } from '@ngrx/store';
import { Response } from '@news';

export const ToggleFavs = createAction('[NEWS] TOGGLE FAVS', props<{ favs: string }>());
export const SelectNews = createAction('[NEWS] SELECT NEWS', props<{ news: string }>());
export const HitsGet = createAction('[NEWS] Hits GET', props<{ language: string; page: number }>());
export const HitsSet = createAction('[NEWS] Hits SET', props<{ response: Response }>());

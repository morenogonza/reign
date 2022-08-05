import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/hacker-news/hacker-news.module').then((m) => m.HackerNewsModule),
      },
    ],
  },
];

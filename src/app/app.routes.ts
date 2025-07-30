import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('@main/features/features.routes'),
  },
  {
    path: 'external',
    loadChildren: () => import('@main/external/external.routes'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main',
  },
];

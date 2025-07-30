import { Routes } from '@angular/router';

const featuresRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@shared/components/layout/layout'),
    children: [
      {
        path: 'subjects',
        title: 'Subjects',
        loadComponent: () => import('./subjects/subjects'),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'subjects',
      },
    ],
  },
];

export default featuresRoutes;

import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { CreateActivityPageComponent } from './pages/create-activity-page/create-activity-page.component';

export const appRouting: Routes = [
  {
    path: '',
    redirectTo: '/activity',
    pathMatch: 'full'
  },
  {
    path: 'activity',
    component: DefaultLayoutComponent,
    data: { title: 'What you did' },
    children: [
      { path: '', component: ActivityPageComponent },
    ]
  },
  {
    path: 'create',
    component: DefaultLayoutComponent,
    data: { title: 'Create new activity' },
    children: [
      { path: '', component: CreateActivityPageComponent },
    ]
  }
];
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "@design/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('./feature/courses/courses.module').then(m => m.CoursesModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./feature/favorites/favorites.module').then(m => m.FavoritesModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./feature/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'achievements',
        loadChildren: () => import('@feature/achievements/achievements.module').then(m => m.AchievementsModule)
      },
      {
        path: 'certificates',
        loadChildren: () => import('./feature/certificates/certificates.module').then(m => m.CertificatesModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./feature/settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

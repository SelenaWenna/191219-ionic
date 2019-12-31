import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

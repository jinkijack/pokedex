import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app-home'
  },
  {
    path: 'details-pokemon/:id',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'app-home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


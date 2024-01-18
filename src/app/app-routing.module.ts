import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(e => e.AuthModule),
  },
  {
    path: 'book',
    loadChildren: () => import('./features/book/book.module').then(e => e.BookModule),
    canActivate: [ authGuard(true) ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

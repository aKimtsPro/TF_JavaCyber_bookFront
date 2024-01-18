import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContainerComponent} from "./container/container.component";
import {BookListComponent} from "./components/book-list/book-list.component";

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'list',
        component: BookListComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { BookListComponent } from './components/book-list/book-list.component';
import {RouterOutlet} from "@angular/router";
import {BookRoutingModule} from "./book-routing.module";
import {BookService} from "./services/book.service";
import {TableModule} from "primeng/table";



@NgModule({
  declarations: [
    ContainerComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    TableModule,
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }

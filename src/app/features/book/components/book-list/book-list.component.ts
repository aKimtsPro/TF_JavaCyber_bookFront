import { Component } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Observable, tap} from "rxjs";
import {IBook} from "../../models/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books$: Observable<IBook[]>

  constructor(
    private readonly $book:BookService
  ) {
    this.books$ = $book.getBooks().pipe(
      tap(console.log)
    )
  }

}

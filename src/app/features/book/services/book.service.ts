import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBook} from "../models/book.model";
import {AuthService} from "../../../services/auth.service";

@Injectable()
export class BookService {

  private readonly BASE_URL: string = 'http://localhost:8080/book'

  constructor(
    private readonly $client: HttpClient,
  ) { }

  getBooks(): Observable<IBook[]>{
    return this.$client.get<IBook[]>(this.BASE_URL)
  }

  deleteBook(id: number) {
    return this.$client.delete(`${this.BASE_URL}/${id}`)
  }
}

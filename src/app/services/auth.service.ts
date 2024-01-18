import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../features/auth/models/credentials.model";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {IAuth} from "../features/auth/models/auth.model";

@Injectable()
export class AuthService {
  private readonly AUTH_KEY = 'auth';
  private readonly BASE_URL: string = "http://localhost:8080"

  private _connectedUser$ = new BehaviorSubject<IAuth | undefined>(this.getUserFromStorage())

  constructor(
      private readonly $client: HttpClient
  ) {}

  login(creds: ICredentials): Observable<IAuth> {
    return this.$client.post<IAuth>(`${this.BASE_URL}/login`, creds).pipe(
      tap({
        next: user => this.connectedUser = user,
        error: err => console.error(err)
      })
    );
  }

  logout(){
    this.connectedUser = undefined;
  }

  get isConnected(){
    return this._connectedUser$.value != undefined
  }

  private getUserFromStorage() : IAuth | undefined {
    const authString: string | null = localStorage.getItem(this.AUTH_KEY);
    return authString ? JSON.parse(atob(authString)) : undefined;
  }

  set connectedUser(user: IAuth | undefined) {
    if( user )
      localStorage.setItem(this.AUTH_KEY, btoa(JSON.stringify(user)))
    else
      localStorage.removeItem(this.AUTH_KEY);

    this._connectedUser$.next(user);
  }

  get connectedUser() : IAuth | undefined {
    return this._connectedUser$.value;
  }

  get token() : string | undefined {
    return this.connectedUser?.token;
  }

}

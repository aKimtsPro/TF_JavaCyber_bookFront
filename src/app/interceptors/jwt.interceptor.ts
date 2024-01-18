import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private readonly $auth: AuthService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.$auth.token;
    console.log(token)

    if( token ){
      const headers = new HttpHeaders({'Authorization': `Bearer ${token}`})
      req = req.clone({
        headers: headers
      })
    }

    return next.handle(req);
  }
}

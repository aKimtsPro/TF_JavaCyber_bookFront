import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export function authGuard(shouldBeConnected: boolean): CanActivateFn {
  return (route, state) => {
    const $auth = inject(AuthService)
    return  shouldBeConnected ? $auth.isConnected : !$auth.isConnected
  }
}

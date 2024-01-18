import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'a-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  links: MenuItem[] = [
    {
      label: 'home',
      routerLink: '/'
    },
    {
      label: 'book',
      // visible: this.isConnected,
      items: [
        {
          label: 'list',
          routerLink: '/book/list'
        }
      ]
    }
  ]

  constructor(
    private readonly $auth: AuthService
  ) {
  }

  get isConnected() {
    return this.$auth.isConnected
  }

  onLogout() {
    this.$auth.logout();
  }
}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LOGIN_FORM} from "../../forms/login.form";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private readonly $auth: AuthService,
    private readonly $router: Router,
  ) {
    this.form = builder.group(LOGIN_FORM)
  }

  onSubmit() {
    if( this.form.valid ){
      this.$auth.login( this.form.value ).subscribe({
        next: () => this.$router.navigateByUrl("/")
      })
    }
  }
}

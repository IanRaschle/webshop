import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UsernamePassword} from "../username-password";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  username: string = "";
  password: string = "";
  showError: boolean = false;
  disabledSubmitButton: boolean = false;

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.disabledSubmitButton = true;
    let body: UsernamePassword = {
      username: this.username,
      password: this.password
    }
    this.httpClient.post<HttpResponse<any>>("api/login", body).subscribe({
      next: value => {
        if (value.status == 200) {
          this.authService.loggedIn = true;
          this.router.navigate(['products']);
        }
      },
      error: () => this.handleLoginError()
    })
  }

  private handleLoginError() {
    this.disabledSubmitButton = false;
    this.showError = true;
  }
}

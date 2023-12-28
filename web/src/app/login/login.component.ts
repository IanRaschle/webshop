import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UsernamePassword} from "../username-password";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

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
    this.loginRequest(body).subscribe({
      next: value => {
        console.log(value)
        if (value.status == 200) {
          this.authService.setToken(value.body["accessToken"]);
          console.log("Logged in!")
          this.router.navigate(['products']);
        }
      },
      error: () => {
        console.log("Error while logging in!")
        this.handleLoginError();
      }
    })
  }

  private loginRequest(body: UsernamePassword): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>("http://localhost:8080/login", body, {observe: 'response'});
  }

  private handleLoginError() {
    this.disabledSubmitButton = false;
    this.showError = true;
  }
}

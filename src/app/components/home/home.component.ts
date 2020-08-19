import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { User } from "src/app/models/user";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private admin: AdminService,
    private router: Router
  ) {
    let token = localStorage.getItem("Token");
    if (token) {
      if (admin.isAdmin()) {
        router.navigate(["/admin"]);
      } else if (admin.isAgent()) {
        const helper = new JwtHelperService();
        const agentId = helper.decodeToken(token).studentId;
        router.navigate(["/agent", agentId]);
      }
    }

    let formcontrols = {
      Identifiant: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.maxLength(8),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.homeForm = this.fb.group(formcontrols);
  }
  login() {
    let data = this.homeForm.value;
    let user = new User(
      null,
      null,
      data.Identifiant,
      null,
      null,
      null,
      null,
      null,

      data.password,
      null,
      null,
      null
    );
    console.log(user);

    this.admin.loginUser(user).subscribe(
      (res) => {
        console.log(res);
        let token = res.token;
        localStorage.setItem("Token", token);
        const helper = new JwtHelperService();

        const decodedToken = helper.decodeToken(token);

        let role = decodedToken.role;
        let id = decodedToken.agentId;

        if (role == "admin") {
          this.router.navigate(["/admin"]);
        } else if (role == "agent") {
          this.router.navigate(["/agent", id]);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get Identifiant() {
    return this.homeForm.get("Identifiant");
  }
  get password() {
    return this.homeForm.get("password");
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { User } from "src/app/models/user";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private admin: AdminService,
    private router: Router
  ) {
    let formControls = {
      Firstname: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z', -]+"),
      ]),

      Lastname: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z', -]+"),
      ]),

      cin: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),

      Identifiant: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.minLength(8),
        Validators.maxLength(8),
      ]),

      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),

      email: new FormControl("", [Validators.required, Validators.email]),
      datenaissance: new FormControl("", [
        Validators.required,
        Validators.pattern('[1,31][1,12][^#&<>"~;$^%{}?/]{1,20}$'),
      ]),
      address: new FormControl("", [
        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z][^#&<>"~;$^%{}?]{1,20}$'),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmpassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.registerForm = this.fb.group(formControls);
  }
  get Firstname() {
    return this.registerForm.get("Firstname");
  }
  get Lastname() {
    return this.registerForm.get("Lastname");
  }
  get cin() {
    return this.registerForm.get("cin");
  }
  get Identifiant() {
    return this.registerForm.get("Identifiant");
  }
  get address() {
    return this.registerForm.get("address");
  }
  get phone() {
    return this.registerForm.get("phone");
  }
  get datenaissance() {
    return this.registerForm.get("datenaissance");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get confirmpassword() {
    return this.registerForm.get("confirmpassword");
  }

  ngOnInit() {
    let isLoggedIn = this.admin.IsLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(["/admin"]);
    }
  }
  register() {
    let data = this.registerForm.value;
    console.log(data);
    let user = new User(
      data.Firstname,
      data.Lastname,
      data.Identifiant,

      data.cin,
      data.phone,
      data.address,
      data.datenaissance,
      data.email,
      data.password,
      data.confirmpassword
    );
    console.log(user);
    this.admin.addAgent(user).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/admin"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
//import { JwtHelperService } from "@auth0/angular-jwt";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { User } from "src/app/models/user";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "src/app/services/admin.service";
@Component({
  selector: "app-update-agent",
  templateUrl: "./update-agent.component.html",
  styleUrls: ["./update-agent.component.css"],
})
export class UpdateAgentComponent implements OnInit {
  updateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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

        Validators.maxLength(8),
      ]),

      phone: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]*"),
        Validators.minLength(8),
        Validators.maxLength(13),
      ]),

      email: new FormControl("", [Validators.required, Validators.email]),
      datenaissance: new FormControl(),
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
    this.updateForm = this.fb.group(formControls);
  }
  get Firstname() {
    return this.updateForm.get("Firstname");
  }
  get Lastname() {
    return this.updateForm.get("Lastname");
  }
  get cin() {
    return this.updateForm.get("cin");
  }
  get Identifiant() {
    return this.updateForm.get("Identifiant");
  }
  get address() {
    return this.updateForm.get("address");
  }
  get phone() {
    return this.updateForm.get("phone");
  }
  get datenaissance() {
    return this.updateForm.get("datenaissance");
  }
  get email() {
    return this.updateForm.get("email");
  }
  get password() {
    return this.updateForm.get("password");
  }
  get confirmpassword() {
    return this.updateForm.get("confirmpassword");
  }
  ngOnInit() {
    let iduser = this.route.snapshot.params.id;

    this.admin.getOneAgent(iduser).subscribe(
      (res) => {
        let user = res;

        this.updateForm.patchValue({
          Firstname: user.Firstname,
          Lastname: user.Lastname,
          Identifiant: user.Identifiant,
          cin: user.cin,
          phone: user.phone,

          address: user.address,
          datenaissance: user.datenaissance,
          email: user.email,
          password: user.password,
          confirmpassword: user.confirmpassword,
          state: user.state,
          role: user.role,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateAgent() {
    let data = this.updateForm.value;
    let iduser = this.route.snapshot.params.id;

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
      data.confirmpassword,
      data.state,
      data.role
    );

    this.admin.updateAgent(iduser, user).subscribe(
      (res) => {
        this.router.navigate(["/admin"]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

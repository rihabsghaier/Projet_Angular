import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Boolean;
  isAdmin: Boolean;
  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.admin.IsLoggedIn();
    this.isAdmin = this.admin.isAdmin();
  }
  logout() {
    localStorage.removeItem("Token");
    this.router.navigate(["/login"]);
  }
}

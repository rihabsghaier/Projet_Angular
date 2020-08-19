import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AgentComponent } from "./components/agent/agent.component";
import { Page404Component } from "./components/page404/page404.component";
import { UpdateAgentComponent } from "./components/update-agent/update-agent.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  { path: "agent", component: AgentComponent, canActivate: [AuthGuard] },
  {
    path: "update/:id",
    component: UpdateAgentComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

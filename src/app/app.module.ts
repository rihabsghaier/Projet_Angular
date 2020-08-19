import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { HeaderComponent } from "./components/header/header.component";
import { AgentComponent } from "./components/agent/agent.component";
import { AdminComponent } from "./components/admin/admin.component";
import { Page404Component } from "./components/page404/page404.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateAgentComponent } from "./components/update-agent/update-agent.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    AgentComponent,
    AdminComponent,
    Page404Component,
    UpdateAgentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

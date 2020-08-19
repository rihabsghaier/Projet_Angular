import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: "root",
})
export class AdminService {
  getallurl = "http://127.0.0.1:8000/api/agents";
  getoneurl = "	http://127.0.0.1:8000/api/agents/";
  puturl = "	http://127.0.0.1:8000/api/agents/";
  deleteurl = "	http://127.0.0.1:8000/api/agents/";
  posturl = "http://127.0.0.1:8000/api/agents";
  deleteallurl = "http://127.0.0.1:8000/api/agents";
  updateAgentState = "https://127.0.0.1:8000/api/agents/state";

  loginurl = "ttp://127.0.0.1:8000/api/agents/login";
  //httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(private http: HttpClient) {}

  /*getAllAgents(): Observable<any> {
    return this.http.get(this.baseurl + "/agents/", {
      headers: this.httpHeaders,
    });
  }
*/
  getAllAgents() {
    return this.http.get<any>(this.getallurl);
  }
  /* getAgent(id) {
    return this.http.get<any>(this.getoneurl);
  }*/
  deleteAgent(id: String) {
    return this.http.delete<any>(this.deleteurl + id);
  }
  addAgent(user: User) {
    return this.http.post<any>(this.posturl, user);
  }

  getOneAgent(id: String) {
    return this.http.get<any>(this.getoneurl + id);
  }
  updateAgent(id: string, user: User) {
    return this.http.put<any>(this.puturl + id, user);
  }

  loginUser(user: User) {
    return this.http.post<any>(this.loginurl, user);
  }

  updateAgentstate(agentId) {
    return this.http.put<any>(this.updateAgentState, agentId);
  }

  IsLoggedIn() {
    let token = localStorage.getItem("Token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  isAdmin() {
    let token = localStorage.getItem("Token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    if (token) {
      let role = decodedToken.role;

      if (role == "admin") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isAgent() {
    let token = localStorage.getItem("Token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    if (token) {
      let role = decodedToken.role;

      if (role == "agent") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

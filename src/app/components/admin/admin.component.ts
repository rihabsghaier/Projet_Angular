import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
//import {FormsModule} from "@angular/forms"
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
  providers: [AdminService],
})
export class AdminComponent implements OnInit {
  /* AgentList = [
    {
      num: 1,
      Firstname: "Ali",
      Lastname: "Mohamed",
      Identifiant: 123456,
      cin: 20758364,
      phone: 98653221,
      email: "admin@gmail.com",
      address: "Cité Elmourouj-Tunis",
    },
    {
      num: 2,
      Firstname: "Rihab",
      Lastname: "Sghaier",
      Identifiant: 123457,
      cin: 28456391,
      phone: 21354789,
      email: "rihab.sghaier@ensi-uma.tn",
      address: "Cité Elmanar-Kébili",
    },
    {
      num: 3,
      Firstname: "Abir",
      Lastname: "Rokbani",
      Identifiant: 123458,
      cin: 12789425,
      phone: 54781239,
      email: "abir.rokbani@ensi-uma.tn",
      address: "Cité Ezzahra-Nabeul",
    },
    {
      num: 4,
      Firstname: "Sana",
      Lastname: "Zekri",

      Identifiant: 123459,
      cin: 58785612,
      phone: 99485326,
      email: "sana.zekri@ensi-uma.tn",
      address: "Cité Ezouhour - Sfax",
    },
    {
      num: 5,
      Firstname: "Sameh",
      Lastname: "Sghaier",
      Identifiant: 123460,
      cin: 54789632,
      phone: 42587963,
      email: "samehsghaier@gmail.com",
      address: "Cité Elmanar-Kébili",
    },
    {
      num: 6,
      Firstname: "Hassen",
      Lastname: "Sghaier",
      Identifiant: 123461,
      cin: 15884265,
      phone: 56741238,
      email: "hassensghaier@gmail.com",
      address: "Cité Elmanar-Kébili",
    },
  ];*/

  AgentList = [];
  Firstname;
  Lastname;
  cin;
  Phone;
  Address;
  Identifiant;
  email;
  constructor(private admin: AdminService) {}
  getAgents = () => {
    this.admin.getAllAgents().subscribe(
      (data) => {
        this.AgentList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  ngOnInit(): void {
    this.admin.getAllAgents().subscribe(
      (data) => {
        this.AgentList = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateState(id) {
    this.admin.updateAgentstate({ agentId: id }).subscribe(
      (result) => {
        console.log(result);
        this.ngOnInit();
      },
      (error) => console.log(error)
    );
  }

  delete(agent) {
    let index = this.AgentList.indexOf(agent);
    this.AgentList.splice(index, 1);
    this.admin.deleteAgent(agent.id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

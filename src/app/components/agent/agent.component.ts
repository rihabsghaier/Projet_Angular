import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-agent",
  templateUrl: "./agent.component.html",
  styleUrls: ["./agent.component.css"],
})
export class AgentComponent implements OnInit {
  imageUrl: string;
  fileToUpload: File = null;
  List = [];
  imageUrl1: string;
  constructor() {}

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  ngOnInit(): void {}

  verifier() {
    this.imageUrl1 = "/assets/images/signch8.png";
    this.List.push({
      checknumber: "0000434",
      RIB: "08708000472004153226",
      clientname: "AZAIEZ SOUAD",
      algorithmdecision: " Accepted",
      similaritypourcentage: "92.62",
    });
  }
  delete() {
    this.List.pop();
    this.imageUrl = "";
    this.imageUrl1 = "";
  }
}

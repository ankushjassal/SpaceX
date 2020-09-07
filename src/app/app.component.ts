import { Component, OnInit } from '@angular/core';
import { SpaceX } from "./Model/SpaceX";
import { SpaceXService } from "./Service/spaceX.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Programs';
  yearSelect: string;
  spacex: SpaceX[];
  constructor(private sxServ: SpaceXService){}
  
  ngOnInit(){
    this.sxServ.getdata().subscribe((response) => {
      this.spacex = response;
    }, (error) => console.log(error));
  }
  LaunchSuccess(event: any){
    this.sxServ.launchSuccess().subscribe((response) => {
      this.spacex = response;
    }, (error) => console.log(error));
  }
  LaunchFail(event: any){
    this.sxServ.launchFail().subscribe((response) => {
      this.spacex = response;
    }, (error) => console.log(error));
  }
}

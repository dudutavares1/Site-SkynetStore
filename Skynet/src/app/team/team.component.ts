import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: any = [
  {
 name: "Dudu Tavares",
 nick_name: "tr1pa",
 role: "Sniper",
 patente: "Aguia",
 adr: 87,
 vitoria: 65,
 head: 35,
},


]

  constructor() { }

  ngOnInit(): void {
  }

}






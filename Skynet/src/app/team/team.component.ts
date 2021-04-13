import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: any = [
  {
 name: "dudu tavares",
 nick_name: "tr1pa",
 role: "sniper",
 victory: 95
  }


]
 
  constructor() { }

  ngOnInit(): void {
  }

}

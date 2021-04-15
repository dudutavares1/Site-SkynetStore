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
 avatar: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.6435-9/121113910_391132525606554_1134199343421530156_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=84a396&_nc_ohc=crwXyGjPJQgAX-GEoF9&_nc_ht=scontent.fsjk2-1.fna&oh=5f1b0a55df9f93b8eeb447dbe9f6c2a5&oe=609F8174",
},

{
  name: "Bruno",
  nick_name: "",
  role: "Sniper",
  patente: "Aguia",
  adr: 87,
  vitoria: 65,
  head: 35,
  avatar: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.18169-9/14915173_1138139569555735_6345588143011620142_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Bb9lwcrvmP0AX83wHBA&_nc_ht=scontent.fsjk2-1.fna&oh=ab0ddf12cbf53cb22f2d2f1333e54b6f&oe=609EA03E",

 },

 {
  name: "Dudu Tavares",
  nick_name: "",
  role: "Sniper",
  patente: "Aguia",
  adr: 87,
  vitoria: 65,
  head: 35,
 },

 {
  name: "Dudu Tavares",
  nick_name: "",
  role: "Sniper",
  patente: "Aguia",
  adr: 87,
  vitoria: 65,
  head: 35,
 },

 {
  name: "Dudu Tavares",
  nick_name: "",
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






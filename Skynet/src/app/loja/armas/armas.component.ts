import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent implements OnInit {

  team: any = [
  {
 name: "Dudu Tavares",
 avatar: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.6435-9/121113910_391132525606554_1134199343421530156_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=84a396&_nc_ohc=crwXyGjPJQgAX-GEoF9&_nc_ht=scontent.fsjk2-1.fna&oh=5f1b0a55df9f93b8eeb447dbe9f6c2a5&oe=609F8174",
},










]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss']
})
export class DicasComponent implements OnInit {
  dicas: any = [
  {

    avatar: "https://i.ytimg.com/vi/gHPPAdS3o4M/maxresdefault.jpg",
    titulo: "Fallen dicas de AWP",
    Link :"https://www.youtube.com/watch?v=gHPPAdS3o4M&ab_channel=e-SporTV",
  }
]

dica2s: any = [
  {

    avatar: "https://i.ytimg.com/vi/gHPPAdS3o4M/maxresdefault.jpg",
    titulo: "Fallen dicas de AWP",
    Link :"https://www.youtube.com/watch?v=gHPPAdS3o4M&ab_channel=e-SporTV",
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss']
})
export class DicasComponent implements OnInit {
videolist=[
  {
    name: "nome",
    desc:"titulo",
    Link :"https://www.youtube.com/watch?v=gHPPAdS3o4M&ab_channel=e-SporTV",
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}




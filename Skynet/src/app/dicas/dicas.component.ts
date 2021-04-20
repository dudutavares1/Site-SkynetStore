import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.component.html',
  styleUrls: ['./dicas.component.scss']
})
export class DicasComponent implements OnInit {
  dicas: any = [

    {
    avatar: "https://i.ytimg.com/vi/7SoUukz13sU/maxresdefault.jpg",

    Link :"https://www.youtube.com/watch?v=7SoUukz13sU&ab_channel=e-SporTV",

  },

  {
    avatar: "https://i.ytimg.com/vi/gHPPAdS3o4M/maxresdefault.jpg",

    Link :"https://www.youtube.com/watch?v=xxhhTGNZ5UE&ab_channel=e-SporTV",
  },

  {
    avatar: "https://i.ytimg.com/vi/hocYvvQIdkk/maxresdefault.jpg",

    Link :"https://www.youtube.com/watch?v=FEd_w8_UNag&ab_channel=e-SporTV",
  },

  {
    avatar: "https://i.ytimg.com/vi/gHPPAdS3o4M/maxresdefault.jpg",

    Link :"https://www.youtube.com/watch?v=hocYvvQIdkk&ab_channel=e-SporTV",
  },

  {
    avatar: "https://i.ytimg.com/vi/J-Yu0fcw6Uk/maxresdefault.jpg",

    Link :"https://www.youtube.com/watch?v=1BT_G3-ssEY&ab_channel=fallenINSIDER",
  },

  {
    avatar: "https://i.ytimg.com/vi/b-CYOQGwgCc/maxresdefault.jpg",

    Link :"https://www.youtube.com/watch?v=b-CYOQGwgCc",
  },

  {
    avatar: "https://i.ytimg.com/vi/XpaFXkSWSiw/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBVvLMWsouHSSXXmJCyZlV1fIQGrw",

    Link :"https://www.youtube.com/watch?v=ZqWcgwO7QbU",
  },



]


  constructor() { }

  ngOnInit(): void {
  }

}




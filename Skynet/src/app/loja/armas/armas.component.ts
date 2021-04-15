import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent implements OnInit {

  loja: any = [
  {
 name: "Ak",
 preco: "400,00",
 Condicao: "Nova de fabrica",

 avatar: "https://csgostash.com/storage/img/skin_sideview/s1285.png?id=4816ffb3a25e858c60dc",
},










]

  constructor() { }

  ngOnInit(): void {
  }

}

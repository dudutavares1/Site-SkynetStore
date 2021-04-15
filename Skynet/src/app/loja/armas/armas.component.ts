import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent implements OnInit {

  loja: any = [
  {
 name: "AK-47 | Legião de Anubis",
 valor: "400,00",
 status: "Nova de fabrica",
codigo: "0001",
 avatar: "https://csgostash.com/storage/img/skin_sideview/s1285.png?id=4816ffb3a25e858c60dc",
},

{
  name: "AWP | Asiimov",
  valor: "205,00",
  status: "Nova de fabrica",
 codigo: "0003",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s274.png?id=9f7ae7d93f93ff4e8f66",
 },

 {
  name: "AWP | Relâmpago",
  valor: "800,00",
  status: "Pouco Usada",
 codigo: "0004",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s79.png?id=e608c27dc67e70ddfa6c",
 },

 {
  name: "AWP | Fade",
  valor: "4.000,00",
  status: "Nova de fabrica",
 codigo: "0005",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s1321.png?id=25d117959446ceac0f3b",
 },

 {
  name: "AWP | Fever Dream",
  valor: "100,00",
  status: "Pouco Usada",
 codigo: "0006",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s845.png?id=efaea6e928c015b6e8de",
 },



]

  constructor() { }

  ngOnInit(): void {
  }

}

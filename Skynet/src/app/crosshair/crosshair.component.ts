import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crosshair',
  templateUrl: './crosshair.component.html',
  styleUrls: ['./crosshair.component.scss']
})
export class CrosshairComponent implements OnInit {

  loja: any = [
  {
 name: "AK-47 | Legião de Anubis",
 valor: "400,00",
 info: "Avtomát Kaláshnikova, também conhecida como Kalashnikov, é um fuzil de assalto de calibre 7,62x39mm criado em 1947 por Mikhail Kalashnikov e produzido na União Soviética pela indústria estatal IZH. É a arma de fogo originária da família de fuzis Kalashnikov ou AK. O trabalho de design na AK-47 começou em 1945", status: "Nova de fabrica",
codigo: "0001",
 avatar: "https://csgostash.com/storage/img/skin_sideview/s1285.png?id=4816ffb3a25e858c60dc",
},

{
  name: "AWP | Asiimov",
  valor: "205,00",
  info: "AWP sniper rifle é a arma mais letal em CS:GO. Cinco tiros bem mirados e ganha uma rodada. Melhore o dispositivo com uma skin fresca e todos os inimigos serão derrotados num piscar de olhos! AWP Lightning Strike atingirá os adversários com um raio, considerando que AWP Hyper Beast assusta rivais com a imagem de um monstro de presas. Conseguir estes e outros itens impressionantes do caixa AWP. Olhe no botão abrir e puxe o gatilho!",
  status: "Nova de fabrica",
  codigo: "0003",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s274.png?id=9f7ae7d93f93ff4e8f66",
 },


 {
  name: "AWP | Relâmpago",
  valor: "800,00",
  info: "AWP sniper rifle é a arma mais letal em CS:GO. Cinco tiros bem mirados e ganha uma rodada. Melhore o dispositivo com uma skin fresca e todos os inimigos serão derrotados num piscar de olhos! AWP Lightning Strike atingirá os adversários com um raio, considerando que AWP Hyper Beast assusta rivais com a imagem de um monstro de presas. Conseguir estes e outros itens impressionantes do caixa AWP. Olhe no botão abrir e puxe o gatilho!",
  status: "Pouco Usada",
  codigo: "0004",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s79.png?id=e608c27dc67e70ddfa6c",
 },

 {
  name: "AWP | Fade",
  valor: "4.000,00",
  info: "AWP sniper rifle é a arma mais letal em CS:GO. Cinco tiros bem mirados e ganha uma rodada. Melhore o dispositivo com uma skin fresca e todos os inimigos serão derrotados num piscar de olhos! AWP Lightning Strike atingirá os adversários com um raio, considerando que AWP Hyper Beast assusta rivais com a imagem de um monstro de presas. Conseguir estes e outros itens impressionantes do caixa AWP. Olhe no botão abrir e puxe o gatilho!",
  status: "Nova de fabrica",
  codigo: "0005",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s1321.png?id=25d117959446ceac0f3b",
 },

 {
  name: "AWP | Fever Dream",
  valor: "100,00",
  info: "AWP sniper rifle é a arma mais letal em CS:GO. Cinco tiros bem mirados e ganha uma rodada. Melhore o dispositivo com uma skin fresca e todos os inimigos serão derrotados num piscar de olhos! AWP Lightning Strike atingirá os adversários com um raio, considerando que AWP Hyper Beast assusta rivais com a imagem de um monstro de presas. Conseguir estes e outros itens impressionantes do caixa AWP. Olhe no botão abrir e puxe o gatilho!",
  status: "Pouco Usada",
  codigo: "0006",
  avatar: "https://csgostash.com/storage/img/skin_sideview/s845.png?id=efaea6e928c015b6e8de",
 },



]

  constructor() { }

  ngOnInit(): void {
  }

}

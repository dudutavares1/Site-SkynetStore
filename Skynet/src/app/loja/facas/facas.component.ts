import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facas',
  templateUrl: './facas.component.html',
  styleUrls: ['./facas.component.scss']
})
export class FacasComponent implements OnInit {

  loja: any = [
  {
 name: "Adagas Sombrias (★) | Degradê",
 valor: "980,00",
 info: "Projetadas para brutalidade eficaz, usar uma adaga é simples como dar um soco. Esta arma foi pintada usando pinturas transparentes com o uso de um aerógrafo, que se misturam sobre um revestimento cromado. Esta não é apenas uma arma, é um bom assunto para uma conversa — Imogen, traficante de armas em treinamento",
codigo: "0001",
 avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfw-bbeQJD7eOwlYSOqPv9NLPF2G0Gu8Eo2bDApt-g0FXl-UU6NTuhI9SccVU3N1DXqFjsxua-g8W7tMvXiSw0K6R8VrQ/512fx512f",
},

{
  name: "Baioneta M9 (★) | Doppler",
  valor: "3.000,00 ",
  info: "Uma homenagem à espada falchion, esta lâmina côncava possui uma ponta curvada. Esta arma foi pintada com tintas metálicas pretas e prateadas usando marmorização média e depois revestida com um acabamento especial de três cores. A lâmina é feita de muitas cores, mas em breve todas se tornarão",
  status: "Nova de fabrica",
  codigo: "0003",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEprP5gVO8v11lZj-gIYbDclRqMA7Zq1S7lOm-0Za6753KmHoxvnQh5y7ZyhWxiRwecKUx0iL1oy6z/512fx512f",
 },


 {
  name: "Canivete Falchion (★) | Mármore Desbotado",
  valor: "1.250,00",
  info: "AWP sniper rifle é a arma mais letal em CS:GO. Cinco tiros bem mirados e ganha uma rodada. Melhore o dispositivo com uma skin fresca e todos os inimigos serão derrotados num piscar de olhos! AWP Lightning Strike atingirá os adversários com um raio, considerando que AWP Hyper Beast assusta rivais com a imagem de um monstro de presas. Conseguir estes e outros itens impressionantes do caixa AWP. Olhe no botão abrir e puxe o gatilho!",
  status: "Pouco Usada",
  codigo: "0004",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlY20mvbmMbfUqW1Q7MBOhuDG_Zi73gPk-RZsYjr1LdTHJlI-ZFiFrlO5yOjrhp656cyfzHU17ikksXralgv3308bb2-Obg/512fx512f",
 },

 {
  name: "Karambit (★ StatTrak™) | Revestimento Enferrujado",
  valor: "1.600,00",
  info: "Este item possui tecnologia StatTrak™, que contabiliza certas estatísticas quando equipado.",
  status: "Nova de fabrica",
  codigo: "0005",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0hOPxNrfunWVY7sBOguzA45W72wXj_hZqYWyiJ9KccVJrMFzW-1O3wrvngZG6u5zAzydhvHJzsX_Ulgv330-48-nwVQ/512fx512f",
 },

 {
  name: "Karambit (★) | Ultravioleta",
  valor: "1.900,00",
  info: "Este é um canivete borboleta. A maior característica deste tipo de arma é a forma como ela se abre, girando livremente em um movimento de rotação que permite um saque rápido. Como consequência, portar um canivete borboleta é proibido em muitos países. Esta arma recebeu aquecimento a altas temperaturas por carvão vegetal para aumentar a sua resistência. Um pouco de cor não faz mal",
  status: "Testada em Campo Oculto",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0h-LmI7fUqWZU7Mxkh6eY9NjwjlHs_BJtaz33INSUJ1U9YQ2D8gLoxr_u0cDp6JXOwSBjvyQq-z-DyE4J5esf/512fx512f",
 },



 {
  name: "Canivete Borboleta (★) | Aquecimento de Aço",
  valor: "2.550,21",
  info: "Com a sua lâmina curva imitando uma garra de tigre, a Karambit foi criada como parte da tradição marcial de silat do Sudeste Asiático. Esta faca geralmente é utilizada com um cabo invertido, com o dedo indicador no aro. As partes desta arma foram pintadas individualmente de cores sólidas, resultando em uma combinação de preto e roxo. Design elegante combinado com intenção brutal",
  status: "Bem Desgastada Oculto",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWZU7Mxkh6eRpo2kiw2wrhdlY2r2LI6dcgBqaAqErFG_lOfvhpS67svLyyMy7Ch0-z-DyC6gs0j7/512fx512f",
 },


 {
  name: "Canivete Borboleta (★) | Revestimento Enferrujado",
  valor: "1.900,00",
  info: "Este é um canivete borboleta. A maior característica deste tipo de arma é a forma como ela se abre, girando livremente em um movimento de rotação que permite um saque rápido. Como consequência, portar um canivete borboleta é proibido em muitos países. Esta arma funciona perfeitamente apesar do exterior enferrujado. Algumas pessoas não precisam esconder quão sujos são os seus negócios",
  status: "Veterana de Guerra Oculto",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqOTgNr7dqWBf4cN0teHE9JrsxgLl_hZvNm-mLYfGJ1NoNV6C_wLvwurthcS6vJnAzycyuyhz5CvcmRGpwUYbcWYJVj0/512fx512f",
 },


 {
  name: "Faca Navaja (★) | Massacre",
  valor: "710,00",
  info: "Este canivete com punho de mármore esconde uma lâmina pequena, mas extremamente afiada. Esta arma foi pintada com um padrão de listras de zebra aluminadas e cromadas com várias refletividades, coberto com uma camada minúscula de vermelho tomate. Valéria não paga Javier para fazer perguntas... ele é pago para arrancar respostas",
  status: "Nova de Fábrica Oculto",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1OrYYiR95t21n4uFnvHxDLrcqXFU6tdwteXI8oThxlDk_kFqazqiJoHDJFU_ZFmGqVW_kL_ohZDvvsudwXJq6yMit3uMlhapwUYbwEf1zcM/512fx512f",
 },


 {
  name: "Faca Ursus (★) | Teia Rubra",
  valor: "1.299,99",
  info: "Esta faca de sobrevivência estilo tantō possui uma lâmina facetada e de perfil integral, completa com empunhadura de impacto. Nenhum penduricalho ou peças móveis — apenas uma lâmina confiável pronta para o trabalho. Esta arma foi pintada usando um hidrográfico de teia de aranha sobre um revestimento vermelho com uma camada de verniz. Cuidado por onde anda, nunca se sabe até onde a teia vai",
  status: "Bem Desgastada Oculto",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxuHbZC595MWJg4WJhMj5Nr_Yg2Yf6sdw272Wpdqkjg2w_EppYGHzcNKdIAY2aQqFq1m8ybrqgcfttZzInWwj5Hfzv4AAjw/512fx512f",
 },


 {
  name: "Faca Talon (★) | Floresta Boreal",
  valor: "1.111,99",
  info: "Esta karambit com punho de marfim vem com rebites de bronze e fio dentado, cortando na entrada e rasgando na saída. Esta arma foi pintada usando um hidrográfico de camuflagem de floresta. A floresta pode ser um local perigoso... nunca esteja a sós",
  status: "Testada em Campo Oculto",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-DjsjyPKnUhX9u6spjj-jNyoHwjF2hpl1tY2DydoPDdQU8ZFCEq1bvwejnjMXovZ_IyXE26SUq5y7YzhywhxwZcKUx0swUb-wN/512fx512f",
 },


]

  constructor() { }

  ngOnInit(): void {
  }

}

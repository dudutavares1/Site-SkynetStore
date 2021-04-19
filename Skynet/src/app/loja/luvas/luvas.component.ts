import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luvas',
  templateUrl: './luvas.component.html',
  styleUrls: ['./luvas.component.scss']
})
export class LuvasComponent implements OnInit {

  loja: any = [
  {
 name: "Luvas de Motorista (★) | Piloto Verde",
 valor: "340,00",
 info: "Estas luvas de condução oferecem proteção e ainda mantêm a sensação tátil. Este par de luvas verdes foi decorado com couro cinza costurado em um padrão de zigue-zague.",
codigo: "0001",
 avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_8i_gIODkvPLNKnUk2Vu79d0k9bM8Ij8nVn6qhBuMGv7coOQIFU5MluDq1S_lenmh5K07szKn3Bk7nMi7HuPy0CzhAYMMLKv64oNVA/512fx512f",
},

{
  name: "Faixas (★) | Fita Adesiva",
  valor: "450,00",
  info: "Preferidas por lutadores corpo a corpo, estas faixas protegem os nós dos dedos e estabilizam o punho ao socar. Estas faixas restauradas são duráveis, mas não permitem a respiração da pele.",
  status: "Testada em Campo Extraordinário",
  codigo: "0003",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp1n-rV4Y3ljWu5rhc1JjTtIYXGIwY5NQnRqVG2yL_qgpPuusvOzXs2vyV0syuJl0fk1RxFO7dtgOveFwsOFpABwg/512fx512f",
 },


 {
  name: "Luvas da Hidra (★) | Manguezal",
  valor: "412,03",
  info: "Estas luvas sem dedos foram decoradas com tachas de metal e o emblema da Operação Hidra. Estas luvas foram feitas com uma mistura de couro, malha sintética e bronze.",
  status: "Pouco Usada",
  codigo: "0004",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAR0hwIQFTibK8LxVh7PTEfitH_-O0mI-Ek__7JrXVqWNI7Ndwte7T8In7t1ixqgc0NiucedPWKmlsIwmTuT7jlLq2wMui6JzAnXs1uyAjsHzZyxPkiBBFPe1uhvycGF6bDvZASKXQUHbW5JlwQTLqR00VJ-vLsQ/512fx512f",
 },

 {
  name: "Luvas da Hidra (★) | Cascavel",
  valor: "500,00",
  info: "Estas luvas sem dedos foram decoradas com tachas de metal e o emblema da Operação Hidra. Estas luvas foram feitas com uma mistura de couro, pele de cobra e bronze.",
  status: "Nova de fabrica",
  codigo: "0005",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAR0hwIQFTibK8LxVh7PTEfitH_-O0mI-Ek__7JrXVqWNI7NdwtfrP9Ifwm1-9pSw-ITiwZ-nIJ1JnJAXO_VnrwbvohcC-vsjIzHdr63Yg5Xvcl0O0hhtIP-E71KedQV3MAKFITb7CWCReeCDipA/512fx512f",
 },

 {
  name: "Faixas (★) | Camuflagem Digital — Abeto",
  valor: "677,00 ",
  info: "Preferidas por lutadores corpo a corpo, estas faixas protegem os nós dos dedos e estabilizam o punho ao socar. A faixa mais externa é uma tela de tecido estampada com uma camuflagem digital verde. Alguns dizem que são durões... outros mostram que são",
  status: "Pouco Usada",
  codigo: "0006",
  avatar: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j3MrbeqWxD7dxOh-zF_Jn4xlCyrktsZmvxINLBdw9vNA7T_Fbrx73vjJPptJucnHdqvCJwsSyImBypwUYblwFxuLY/512fx512f",
 },



]

  constructor() { }

  ngOnInit(): void {
  }

}

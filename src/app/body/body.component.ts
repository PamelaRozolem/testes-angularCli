import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  imagem="https://i2.wp.com/www.gpabrasil.com.br/wp-content/uploads/2018/03/nomes-de-cachorro.jpg?w=800&ssl=1";

  cores=["verde","vermelho","azul","amarelo"];

    usuarios:[{id:1,nome:"pamela",idade:25,email:"pamelarozolem@gmail.com"},
      {id:2,nome:"pedro",idade:26,email:"pedro@gmail.com"},
      {id:3,nome:"maria",idade:27,email:"maria@gmail.com"}
    ];

  ngOnInit() {
  }

}

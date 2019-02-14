import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  imagem="https://i2.wp.com/www.gpabrasil.com.br/wp-content/uploads/2018/03/nomes-de-cachorro.jpg?w=800&ssl=1";

  usuarioLogado={};

  showUser(usuario){
    this.usuarioLogado=usuario;
  }

  ngOnInit() {
  }

}

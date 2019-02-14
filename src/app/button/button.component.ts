import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  constructor() { }

  @Output() setUser = new EventEmitter();

  usuarios=[
    {id:1,nome:"pamela",idade:25,email:"pamela@gmail.com"},
    {id:2,nome:"pedro",idade:26,email:"pedro@gmail.com"},
    {id:3,nome:"maria",idade:27,email:"maria@gmail.com"},
    {id:3,nome:"maria",idade:27,email:"maria@gmail.com"}
  ];

  handleUser(usuario) {
    this.setUser.emit(usuario);
  }

  ngOnInit() {
  }

}

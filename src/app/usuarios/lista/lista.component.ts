import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  public usuarios: Array<UserModel> = [];
  constructor(private userService: UsuarioService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      this.usuarios = users;
    });
  }
}

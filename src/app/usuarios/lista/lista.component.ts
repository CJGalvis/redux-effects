import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/models/UserModel';
import * as usersActions from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  public usuarios: Array<UserModel> = [];
  public loading = false;
  public error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(usersActions.cargarUsuarios());
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
  }
}

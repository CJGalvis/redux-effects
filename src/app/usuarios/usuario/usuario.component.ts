import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario, deleteUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  public loading = false;
  public error: any;
  public user: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.store.dispatch(deleteUser());
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
    this.store.select('usuario').subscribe(({ loading, error, usuario }) => {
      this.user = usuario;
      this.loading = loading;
      this.error = error;
    });
  }
}

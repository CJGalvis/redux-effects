import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsuariosService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      mergeMap((action) =>
        this.usersService.getUserById(action.id).pipe(
          map((dataService: any) =>
            usuariosActions.cargarUsuarioSuccess({ usuario: dataService })
          ),
          catchError((errService) =>
            of(usuariosActions.cargarUsuariosError({ payload: errService }))
          )
        )
      )
    )
  );
}

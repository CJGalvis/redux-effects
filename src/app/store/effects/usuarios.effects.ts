import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsuariosService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      tap((data) => console.log('cargarUsuarios Effect', data)), // esta línea es opcional, es solo para ver el effecto ejecutado
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((dataService) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: dataService })
          ),
          catchError((errService) =>
            of(usuariosActions.cargarUsuariosError({ payload: errService }))
          )
        )
      )
    )
  );
}

import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/UserModel';

export const cargarUsuarios = createAction('[Usuarios]  CargarUsuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios]  cargarUsuariosSuccess',
  props<{ usuarios: Array<UserModel> }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios]  cargarUsuariosError',
  props<{ payload: any }>()
);

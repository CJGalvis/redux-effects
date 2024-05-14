import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/UserModel';

export const cargarUsuario = createAction(
  '[Usuario]  cargarUsuario',
  props<{ id: string }>()
);

export const deleteUser = createAction('[Usuario]  deleteUser');

export const cargarUsuarioSuccess = createAction(
  '[Usuario]  cargarUsuarioSuccess',
  props<{ usuario: UserModel }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario]  cargarUsuarioError',
  props<{ payload: any }>()
);

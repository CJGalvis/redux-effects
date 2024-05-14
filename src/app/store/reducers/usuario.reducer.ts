import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions';
import { UserModel } from 'src/app/models/UserModel';

export interface UsuarioState {
  id: string | null;
  usuario: UserModel | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}
const usuarioInitialState: UsuarioState = {
  id: null,
  usuario: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,
  on(actions.cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    loaded: false,
    id,
  })),
  on(actions.deleteUser, (state) => ({
    ...state,
    loading: false,
    loaded: false,
    usuario: null,
    id: null,
  })),
  on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuario: usuario,
  })),
  on(actions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      name: payload.name,
      message: payload.message,
      url: payload.url,
    },
  }))
);

export function usuarioReducer(state: any, action: Action) {
  return _usuarioReducer(state, action);
}

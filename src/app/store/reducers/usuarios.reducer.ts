import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions';
import { UserModel } from 'src/app/models/UserModel';

export interface UsuariosState {
  users: Array<UserModel>;
  loaded: boolean;
  loading: boolean;
  error: any;
}
const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,
  on(actions.cargarUsuarios, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(actions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
  })),
  on(actions.cargarUsuariosError, (state, { payload }) => ({
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

export function usuariosReducer(state: any, action: Action) {
  return _usuariosReducer(state, action);
}

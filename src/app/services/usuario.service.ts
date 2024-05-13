import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private base_url = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${this.base_url}/users?per_page=6`;
    return this.http.get(url).pipe(map((res: any) => res.data));
  }

  getUserById(id: string) {
    const url = `${this.base_url}users/${id}`;
    return this.http.get(url);
  }
}

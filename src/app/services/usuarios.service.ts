import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private base_url = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${this.base_url}/users?delay=5`;
    return this.http.get(url).pipe(map((res: any) => res.data));
  }

  getUserById(id: string) {
    const url = `${this.base_url}/users/${id}`;
    return this.http.get(url).pipe(map((res: any) => res.data));
  }
}

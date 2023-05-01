import { Usuario } from 'src/app/model/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { enviroment } from '../enviroments/enviroment';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const base_url=enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Usuario[]>()
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Usuario[]>(this.url);
  }
  insert(usuario:Usuario){
return this.http.post(this.url,usuario);
  }
  setlist(listaNueva: Usuario[]){
    this.listaCambio.next(listaNueva)
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }
  update(usuario: Usuario) {
    return this.http.put(this.url + '/' + usuario.id, usuario);
  }
  
}

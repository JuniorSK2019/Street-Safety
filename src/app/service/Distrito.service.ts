import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Distrito } from '../model/Distrito';
import { Subject } from 'rxjs';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class DistritoService {
  private url = `${base_url}/distritos`;
  private listCambio = new Subject<Distrito[]>()
  private confirmaEliminacion = new Subject<Boolean>()


  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Distrito[]>(this.url);
  }
  insert(distrito: Distrito) {
    return this.http.post(this.url, distrito);
  }

  setList(listaNueva: Distrito[]) {
    this.listCambio.next(listaNueva);
  }

  getList() {
    return this.listCambio.asObservable();
  }

  modificar(distrito: Distrito) {
    return this.http.put(this.url + "/" + distrito.id, distrito);
  }
  listarId(id: number) {
    return this.http.get<Distrito>(`${this.url}/${id}`);
  }
  eliminar(id: number) {

    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

}
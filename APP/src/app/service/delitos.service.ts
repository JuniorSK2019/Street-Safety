import { Injectable } from '@angular/core';
import { Delitos } from '../model/Delitos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../enviroments/enviroment';
import { Subject } from 'rxjs';

const base_url=enviroment.base;

@Injectable({
  providedIn: 'root'
})
export class DelitosService {
  private url = `${base_url}/delitos`;
  private listaCambio = new Subject<Delitos[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) {}
  list(){
    return this.http.get<Delitos[]>(this.url);
  }
   insert(delitos:Delitos){
    return this.http.post(this.url,delitos);
  }
  setlist(listaNueva: Delitos[]){
    this.listaCambio.next(listaNueva)
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Delitos>(`${this.url}/${id}`);
  }
  update(Delitos: Delitos) {
    return this.http.put(this.url +'/'+ Delitos.id, Delitos);
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
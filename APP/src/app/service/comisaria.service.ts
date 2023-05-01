import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { Comisaria } from '../model/Comisaria';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url=enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class ComisariaService {
  private url = `${base_url}/comisarias`;
  private listaCambio = new Subject<Comisaria[]>()
  private confirmaEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Comisaria[]>(this.url);
  }
  insert(usuario:Comisaria){
return this.http.post(this.url,usuario);
  }
  setlist(listaNueva: Comisaria[]){
    this.listaCambio.next(listaNueva)
  }
  getlist(){
    return this.listaCambio.asObservable();
  }
  modificar(Comisaria:Comisaria){
    return this.http.put(this.url + "/" + Comisaria.id , Comisaria)
  }
  listarid(id:number)
  {
    return this.http.get<Comisaria> (`${this.url}/${id}`);

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



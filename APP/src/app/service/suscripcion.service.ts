import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { suscripcion } from '../model/suscripcion';
const base_url = enviroment.base;
@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url = `${base_url}/suscripcion`
  private listCambio = new Subject<suscripcion[]>();
  private confirmaEliminacion=new Subject<Boolean>();
  constructor(private http: HttpClient) {}
  list(){
    return this.http.get<suscripcion[]>(this.url);
  }
  insert(Suscripcion:suscripcion){
    return this.http.post(this.url,Suscripcion);
  }
  setList(listaNueva:suscripcion[]){
    this.listCambio.next(listaNueva);
  }
  getList(){
    return this.listCambio.asObservable();
  }
  update(Suscripcion:suscripcion){
    return this.http.put(this.url + "/" + Suscripcion.id,Suscripcion);
  }
  listId(id:number){
    return this.http.get<suscripcion>(`${this.url}/${id}`);
  }
  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado:Boolean){
    this.confirmaEliminacion.next(estado);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';
import {MatDialog} from '@angular/material/dialog';
import { SuscripcionDialogoComponent } from './suscripcion-dialogo/suscripcion-dialogo.component';

@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css'],
})
export class SuscripcionListarComponent implements OnInit {
  lista: suscripcion[] = [];
  dataSource: MatTableDataSource<suscripcion> = new MatTableDataSource();
  displayedColumns: string[] = ['Id','IdTipoMembresia','FechaInicio','FechaFin','IdPago','acciones'];
  private idMayor:number=0;
  constructor(private sS: SuscripcionService, private dialog:MatDialog) {}
  ngOnInit(): void {
    this.sS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.sS.getConfirmaEliminacion().subscribe(data=>{
      data==true? this.eliminar(this.idMayor):false;
    });
  }
  confirmar(Id:number){
    this.idMayor=Id;
    this.dialog.open(SuscripcionDialogoComponent);
  }
  eliminar(Id:number){
    this.sS.eliminar(Id).subscribe(()=>{
       this.sS.list().subscribe(data=>{
        this.sS.setList(data);
       }) ;
    });
  }
  filtrar(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
}

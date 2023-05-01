import { Component, OnInit } from '@angular/core';
import { Delitos } from 'src/app/model/Delitos';
import { MatTableDataSource } from '@angular/material/table';
import { DelitosService } from 'src/app/service/delitos.service';
import { MatDialog } from '@angular/material/dialog';
import { DelitosDialogoComponent } from './delitos-dialogo/delitos-dialogo.component';

@Component({
  selector: 'app-delitos-listar',
  templateUrl: './delitos-listar.component.html',
  styleUrls: ['./delitos-listar.component.css']
})
export class DelitosListarComponent implements OnInit{
  lista:Delitos[]=[];
  dataSource:MatTableDataSource<Delitos>= new MatTableDataSource();
  displayColumns:string[]=['id', 'Hora', 'Fecha', 'Distrito', 'Distrito_idZona', 'IdTipoDelitos','accion1']
  private idMayor: number=0;
  constructor(private dS:DelitosService, private dialog: MatDialog){}
  ngOnInit(): void {
      this.dS.list().subscribe((data)=>{
        this.dataSource=new MatTableDataSource(data);
      });

      this.dS.getlist().subscribe((data)=>{
        this.dataSource=new MatTableDataSource(data);
      });
      this.dS.getConfirmaEliminacion().subscribe(data =>{
        data == true ? this.eliminar(this.idMayor):false;
      });
  }
  confirmar(id:number){
    this.idMayor = id;
    this.dialog.open(DelitosDialogoComponent);
  }
  eliminar(id: number){
    this.dS.eliminar(id).subscribe(()=>{
      this.dS.list().subscribe(data =>{
        this.dS.setlist(data);
      });
    });
  }
  filtrar(e: any){
    this.dataSource.filter = e.target.value.trim();
  }

}

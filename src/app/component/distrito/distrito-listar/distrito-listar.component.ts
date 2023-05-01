import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Distrito } from 'src/app/model/Distrito';
import { DistritoDialogoComponent } from './distrito-dialogo/distrito-dialogo.component';
import { DistritoService } from 'src/app/service/Distrito.service';

@Component({
  selector: 'app-distrito-listar',
  templateUrl: './distrito-listar.component.html',
  styleUrls: ['./distrito-listar.component.css']
})
export class DistritoListarComponent implements OnInit {

  lista: Distrito[] = [];
  dataSource: MatTableDataSource<Distrito> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombreDistrito', 'nombreProvincia', 'acciones']
  private idMayor: number = 0;

  constructor(private dS: DistritoService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.dS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DistritoDialogoComponent);
  }
  eliminar(id: number) {
    this.dS.eliminar(id).subscribe(() => {
      this.dS.list().subscribe(data => {
        this.dS.setList(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}

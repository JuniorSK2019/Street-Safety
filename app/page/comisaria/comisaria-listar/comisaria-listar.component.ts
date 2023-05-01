import { Component,ViewChild } from '@angular/core';
import { Comisaria } from 'src/app/model/Comisaria';
import { MatTableDataSource } from '@angular/material/table';
import { ComisariaService } from 'src/app/service/comisaria.service';
import { MatDialog } from '@angular/material/dialog';
import { ComisariaDialogoComponent } from './comisaria-dialogo/comisaria-dialogo.component';
import { PageEvent, MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-comisaria-listar',
  templateUrl: './comisaria-listar.component.html',
  styleUrls: ['./comisaria-listar.component.css']
})
export class ComisariaListarComponent {
  @ViewChild('paginator') paginator!:MatPaginator ;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  dataSource: MatTableDataSource<Comisaria> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'direccion', 'celular','idalerta','latitud','longitud','acciones']
  private idMayor: number = 0;

  constructor(private cS:ComisariaService,private dialog:MatDialog){}
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      
    })
    this.cS.getlist().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ComisariaDialogoComponent);
  }
  eliminar(id: number) {
    this.cS.eliminar(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setlist(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  
}


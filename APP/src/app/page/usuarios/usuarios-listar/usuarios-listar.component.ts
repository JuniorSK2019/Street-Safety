import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit{
  lista:Usuario[]=[];
  dataSource:MatTableDataSource<Usuario>= new MatTableDataSource();
  displayColumns:string[]=['id','username','password','email','nombres_usuario','apellidos_usuario','fecha_nacimiento','idalerta','iddistrito','idsuscripcion','accion1']

  constructor(private uS:UsuarioService){}
  ngOnInit(): void {
    this.uS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.uS.getlist().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  }



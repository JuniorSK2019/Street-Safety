import { Component, OnInit } from '@angular/core';
import { SuscripcionService } from 'src/app/service/suscripcion.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-suscripcion-dialogo',
  templateUrl: './suscripcion-dialogo.component.html',
  styleUrls: ['./suscripcion-dialogo.component.css']
})
export class SuscripcionDialogoComponent implements OnInit{
  constructor(private sS:SuscripcionService,
    private dialogRef:MatDialogRef<SuscripcionDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.sS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}

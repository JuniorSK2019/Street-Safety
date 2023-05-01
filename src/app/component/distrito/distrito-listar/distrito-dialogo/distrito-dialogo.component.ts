import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/service/Distrito.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-distrito-dialogo',
  templateUrl: './distrito-dialogo.component.html',
  styleUrls: ['./distrito-dialogo.component.css']
})
export class DistritoDialogoComponent implements OnInit {

  constructor(private dS: DistritoService,
    private dialogRef: MatDialogRef<DistritoDialogoComponent>) { }

  ngOnInit(): void {}
  confirmar(estado: boolean) {
    this.dS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}

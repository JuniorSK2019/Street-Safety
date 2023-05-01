import { Component } from '@angular/core';
import { ComisariaService } from 'src/app/service/comisaria.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comisaria-dialogo',
  templateUrl: './comisaria-dialogo.component.html',
  styleUrls: ['./comisaria-dialogo.component.css']
})
export class ComisariaDialogoComponent {
  constructor(private cS: ComisariaService,
    private dialogRef: MatDialogRef<ComisariaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.cS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}
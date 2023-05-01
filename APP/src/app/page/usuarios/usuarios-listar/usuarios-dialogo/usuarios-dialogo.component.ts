import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-dialogo',
  templateUrl: './usuarios-dialogo.component.html',
  styleUrls: ['./usuarios-dialogo.component.css']
})
export class UsuariosDialogoComponent {
  constructor(private uS: UsuarioService,
    private dialogRef: MatDialogRef<UsuariosDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.uS.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }

}

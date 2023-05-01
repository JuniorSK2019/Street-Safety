import { Component, OnInit } from '@angular/core';
import { DelitosService } from 'src/app/service/delitos.service';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-delitos-dialogo',
  templateUrl: './delitos-dialogo.component.html',
  styleUrls: ['./delitos-dialogo.component.css']
})
export class DelitosDialogoComponent implements OnInit{
constructor(private dS:DelitosService, private dialogRef: MatDialogRef<DelitosDialogoComponent>){}
ngOnInit():void{}
confirmar(estado: boolean){
  this.dS.setConfirmaEliminacion(estado);
  this.dialogRef.close();

}

}

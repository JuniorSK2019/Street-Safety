import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { DelitosService } from 'src/app/service/delitos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Delitos } from 'src/app/model/Delitos';
import * as moment from 'moment';


@Component({
  selector: 'app-delitos-creadita',
  templateUrl: './delitos-creadita.component.html',
  styleUrls: ['./delitos-creadita.component.css']
})
export class DelitosCreaditaComponent implements OnInit {
  id:number=0;
  edicion:boolean=false;
  form: FormGroup=new FormGroup({});
  delitos: Delitos=new Delitos();
  mensaje: string="";
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(private dS: DelitosService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
       this.id=data['id'];
       this.edicion=data['id'] !=null;
       this.init();
    });
      this.form= new FormGroup({
        id: new FormControl(),
        Hora: new FormControl(),
        Fecha: new FormControl(),
        Distrito: new FormControl(),
        Distrito_idZona: new FormControl(),
        IdTipoDelitos: new FormControl(),
      })
  }
  aceptar(): void{
    this.delitos.id=this.form.value['id'];
    this.delitos.Hora=this.form.value['Hora'];
    this.delitos.Fecha=this.form.value['Fecha'];
    this.delitos.Distrito=this.form.value['Distrito'];
    this.delitos.Distrito_idZona=this.form.value['Distrito_idZona'];
    this.delitos.IdTipoDelitos=this.form.value['IdTipoDelitos'];
    if (this.form.value['Distrito'].length > 0){
      if(this.edicion) {
        this.dS.update(this.delitos).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setlist(data);
          });
        });
      } else {
      this.dS.insert(this.delitos).subscribe(data =>{
        this.dS.list().subscribe(data =>{
         this.dS.setlist(data);
        });
      });
    }
     this.router.navigate(['delitos']);
    } else {
      this.mensaje = "Ingrese el distrito !!";
    }

  }
  init(){
    if(this.edicion){
      this.dS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          id: new FormControl(data.id),
          Hora: new FormControl(data.Hora),
          Fecha: new FormControl(data.Fecha),
          Distrito: new FormControl(data.Distrito),
          Distrito_idZona: new FormControl(data.Distrito_idZona),
          IdTipoDelitos: new FormControl(data.IdTipoDelitos),
        });
      });
    }
  }

}

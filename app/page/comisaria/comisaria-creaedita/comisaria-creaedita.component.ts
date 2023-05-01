import { Component } from '@angular/core';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comisaria } from 'src/app/model/Comisaria';
import { ComisariaService } from 'src/app/service/comisaria.service';

@Component({
  selector: 'app-comisaria-creaedita',
  templateUrl: './comisaria-creaedita.component.html',
  styleUrls: ['./comisaria-creaedita.component.css']
})
export class ComisariaCreaeditaComponent {
  form: FormGroup = new FormGroup({});
  comisaria: Comisaria = new Comisaria()
  mensaje: string = ""
  edicion: boolean = false
  id: number = 0;

  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(private cS: ComisariaService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      nameComisaria: new FormControl(),
      direccionComisaria: new FormControl(),
      cellComisaria: new FormControl(),
      idAlerta: new FormControl(),
      Latitud: new FormControl(),
      Longitud:new FormControl() 
    });

  }
  aceptar(): void {
    this.comisaria.id = this.form.value['id'];
    this.comisaria.nameComisaria = this.form.value['nameComisaria'];
    this.comisaria.direccionComisaria = this.form.value['direccionComisaria'];
    this.comisaria.cellComisaria = this.form.value['cellComisaria'];
    this.comisaria.idAlerta = this.form.value['idAlerta'];
    this.comisaria.Latitud = this.form.value['Latitud'];
    this.comisaria.Longitud= this.form.value['Longitud'];

    if (this.form.value['nameComisaria'].length > 0 && this.form.value['direccionComisaria'].length > 0 && this.form.value['idAlerta'].length > 0) {
      if (this.edicion) {
        this.cS.modificar(this.comisaria).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setlist(data);
          });
        });
      } else {
        this.cS.insert(this.comisaria).subscribe(() => {
          this.cS.list().subscribe(data => {
            this.cS.setlist(data);
          })
        })
      }
      this.router.navigate(['comisarias']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.cS.listarid(this.id).subscribe(data => {
        //this.propietario = data

        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameComisaria: new FormControl(data.nameComisaria),
          direccionComisaria: new FormControl(data.direccionComisaria),
          cellComisaria: new FormControl(data.cellComisaria),
          idAlerta: new FormControl(data.idAlerta),
          Latitud: new FormControl(data.Latitud),
          Longitud:new FormControl(data.Longitud)
        });
        console.log(data);
      });
    }
  }
}


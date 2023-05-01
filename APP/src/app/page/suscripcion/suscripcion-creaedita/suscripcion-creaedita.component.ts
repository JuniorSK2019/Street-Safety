import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { suscripcion } from 'src/app/model/suscripcion';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-creaedita',
  templateUrl: './suscripcion-creaedita.component.html',
  styleUrls: ['./suscripcion-creaedita.component.css'],
})
export class SuscripcionCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  Suscripcion: suscripcion = new suscripcion();
  mensaje: string = '';
  edicion: boolean = false;
  id: number = 0;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  constructor(
    private sS: SuscripcionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = new FormGroup({
      id: new FormControl(),
      idtipo_membresia: new FormControl(),
      fecha_inicio: new FormControl(),
      fecha_fin: new FormControl(),
      idpago: new FormControl(),
    });
  }
  aceptar(): void {
    this.Suscripcion.id = this.form.value['id'];
    this.Suscripcion.idtipo_membresia = this.form.value['idtipo_membresia'];
    this.Suscripcion.fecha_inicio = this.form.value['fecha_inicio'];
    this.Suscripcion.fecha_fin = this.form.value['fecha_fin'];
    this.Suscripcion.idpago = this.form.value['idpago'];
    if (this.form.value['id'].length > 0) {
      if (this.edicion) {
        this.sS.update(this.Suscripcion).subscribe(() => {
          this.sS.list().subscribe((data) => {
            this.sS.setList(data);
          });
        });
      } else {
        this.sS.insert(this.Suscripcion).subscribe(() => {
          this.sS.list().subscribe(data => {
            this.sS.setList(data);
          });
        });
      }
      this.router.navigate(['suscripcion']);
    } else {
      this.mensaje = 'Complete los valores requeridos';
    }
  }
  init() {
    if (this.edicion) {
      this.sS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          idtipo_membresia: new FormControl(data.idtipo_membresia),
          fecha_inicio: new FormControl(data.fecha_inicio),
          fecha_fin: new FormControl(data.fecha_fin),
          idpago: new FormControl(data.idpago),
        });
        console.log(data);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Distrito } from 'src/app/model/Distrito';
import { Router } from '@angular/router';
import { DistritoService } from 'src/app/service/Distrito.service';

@Component({
  selector: 'app-distrito-creaedita',
  templateUrl: './distrito-creaedita.component.html',
  styleUrls: ['./distrito-creaedita.component.css']
})
export class DistritoCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  distrito: Distrito = new Distrito();
  mensaje: string = "";
  constructor(private dS: DistritoService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      nameDistrito: new FormControl(),
      nameProvincia: new FormControl(),
    })
  }

  aceptar() {
  this.distrito.id= this.form.value['id'];
  this.distrito.nameDistrito = this.form.value['nameDistrito'];
  this.distrito.nameProvincia = this.form.value['nameProvincia'];
  if (this.form.value['nameDistrito'].length > 0) {
    this.dS.insert(this.distrito).subscribe(data => {
      this.dS.list().subscribe(data => {
        this.dS.setList(data);
      })
    })
    this.router.navigate(['distritos']);
  } else {
    this.mensaje = "Ingrese el nombre!!!";
  }
}

}

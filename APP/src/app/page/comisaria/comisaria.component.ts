import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comisaria',
  templateUrl: './comisaria.component.html',
  styleUrls: ['./comisaria.component.css']
})
export class ComisariaComponent {
  ngOnInit(): void {}
constructor(public route:ActivatedRoute){}
}

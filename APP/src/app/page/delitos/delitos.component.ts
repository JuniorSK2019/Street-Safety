import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delitos',
  templateUrl: './delitos.component.html',
  styleUrls: ['./delitos.component.css']
})
export class DelitosComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public route:ActivatedRoute){}
}

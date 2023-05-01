import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  constructor(private route: Router) { }
  ngOnInit(): void {  }
  navegar(url: string){
    this.route.navigate([url]);

  }

}

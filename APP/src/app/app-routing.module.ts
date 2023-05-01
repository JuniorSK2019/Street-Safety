import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { DelitosComponent } from './page/delitos/delitos.component';
import { DelitosCreaditaComponent } from './page/delitos/delitos-creadita/delitos-creadita.component';

const routes: Routes = [
 {path: 'menu', component: ToolbarComponent,children:[]},
  {
    path:'usuarios', component:UsuariosComponent,children:[
      {path:'nuevo', component:UsuariosCreaditaComponent},
      {path:'edit/:id', component:UsuariosCreaditaComponent}
    ]
  },
  {
    path: 'delitos', component:DelitosComponent, children:[
      {path:'nuevo', component:DelitosCreaditaComponent},
      {path:'edit/:id', component:DelitosCreaditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { DelitosComponent } from './page/delitos/delitos.component';
import { DelitosCreaditaComponent } from './page/delitos/delitos-creadita/delitos-creadita.component';
import { ComisariaCreaeditaComponent } from './page/comisaria/comisaria-creaedita/comisaria-creaedita.component';
import { ComisariaComponent } from './page/comisaria/comisaria.component';

const routes: Routes = [
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
  },
  {
    path:'comisarias', component:ComisariaComponent,children:[
      {path:'nuevo', component:ComisariaCreaeditaComponent},
      { path: 'edicion/:id', component: ComisariaCreaeditaComponent }
    ]
     
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

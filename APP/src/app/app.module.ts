import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosListarComponent } from './page/usuarios/usuarios-listar/usuarios-listar.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms'
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import{MatDatepickerModule} from '@angular/material/datepicker'
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from'@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { DelitosComponent } from './page/delitos/delitos.component';
import { DelitosListarComponent } from './page/delitos/delitos-listar/delitos-listar.component';
import { DelitosCreaditaComponent } from './page/delitos/delitos-creadita/delitos-creadita.component';
import { DelitosDialogoComponent } from './page/delitos/delitos-listar/delitos-dialogo/delitos-dialogo.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ComisariaComponent } from './page/comisaria/comisaria.component';
import { ComisariaListarComponent } from './page/comisaria/comisaria-listar/comisaria-listar.component';
import { ComisariaCreaeditaComponent } from './page/comisaria/comisaria-creaedita/comisaria-creaedita.component';
import { ComisariaDialogoComponent } from './page/comisaria/comisaria-listar/comisaria-dialogo/comisaria-dialogo.component';
import { UsuariosDialogoComponent } from './page/usuarios/usuarios-listar/usuarios-dialogo/usuarios-dialogo.component'
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
   UsuariosListarComponent,
   UsuariosCreaditaComponent,
   ToolbarComponent,
   DelitosComponent,
   DelitosListarComponent,
   DelitosCreaditaComponent,
   DelitosDialogoComponent,
   ComisariaComponent,
   ComisariaListarComponent,
   ComisariaCreaeditaComponent,
   ComisariaDialogoComponent,
   UsuariosDialogoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

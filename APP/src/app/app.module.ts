import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient,HttpHeaders,} from '@angular/common/http';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './page/suscripcion/suscripcion-listar/suscripcion-listar.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule}from'@angular/forms';
import {MatNativeDateModule}from '@angular/material/core';
import {MatDialogModule}from '@angular/material/dialog';
import {FormsModule}from '@angular/forms';
import {MatSelectModule}from '@angular/material/select';
import { SuscripcionCreaeditaComponent } from './page/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';
import { SuscripcionDialogoComponent } from './page/suscripcion/suscripcion-listar/suscripcion-dialogo/suscripcion-dialogo.component'
import {MatDatepickerModule}from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SuscripcionComponent,
    SuscripcionListarComponent,
    SuscripcionCreaeditaComponent,
    SuscripcionDialogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

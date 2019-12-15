import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RecetaComponent } from './components/receta/receta.component';
import { EditRecetaComponent } from './components/edit-receta/edit-receta.component';
import { EditCarnetComponent } from './components/edit-carnet/edit-carnet.component';
import { CarnetComponent } from './components/carnet/carnet.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { EditHistoriaComponent } from './components/edit-historia/edit-historia.component';
import { EditExpedienteComponent } from './components/edit-expediente/edit-expediente.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    RecetaComponent,
    EditRecetaComponent,
    EditCarnetComponent,
    CarnetComponent,
    HistoriaComponent,
    EditHistoriaComponent,
    EditExpedienteComponent,
    ExpedienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

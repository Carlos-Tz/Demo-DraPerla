import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SecureInnerPagesGuard } from './services/secure-inner-pages.guard';
import { AuthGuard } from './services/auth.guard';
import { PanelComponent } from './components/panel/panel.component';
import { MainComponent } from './components/main/main.component';
import { EditCarnetComponent } from './components/edit-carnet/edit-carnet.component';
import { EditExpedienteComponent } from './components/edit-expediente/edit-expediente.component';
import { EditHistoriaComponent } from './components/edit-historia/edit-historia.component';
import { EditRecetaComponent } from './components/edit-receta/edit-receta.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: InicioComponent},
  {path: 'main', component: MainComponent},
  {path: 'panel', component: PanelComponent, canActivate: [AuthGuard]},
  {path: 'cliente/:key', component: ClienteComponent, canActivate: [AuthGuard]},
  {path: 'edit-carnet/:key', component: EditCarnetComponent, canActivate: [AuthGuard]},
  {path: 'edit-expedi/:key', component: EditExpedienteComponent, canActivate: [AuthGuard]},
  {path: 'edit-historia/:key', component: EditHistoriaComponent, canActivate: [AuthGuard]},
  {path: 'edit-receta/:key', component: EditRecetaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicasComponent } from './dicas/dicas.component';
import { CrosshairComponent } from './crosshair/crosshair.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ArmasComponent } from './loja/armas/armas.component';
import { FacasComponent } from './loja/facas/facas.component';
import { LuvasComponent } from './loja/luvas/luvas.component';
import { PromocaoComponent } from './loja/promocao/promocao.component';




const routes: Routes = [
  { path: 'dicas', component: DicasComponent },
  {path: 'Crosshair', component: CrosshairComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'Team', component: TeamComponent },
  {path: 'Cadastro', component: CadastroComponent },
   {path: 'Login', component: LoginComponent },
   {path: 'Armas', component: ArmasComponent },
   {path: 'Cadastro', component: CadastroComponent },
   {path: 'Luvas', component: LuvasComponent },
   {path: 'Facas', component: FacasComponent },
   {path: 'Armas', component: ArmasComponent },
   {path: 'Promocao', component: PromocaoComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




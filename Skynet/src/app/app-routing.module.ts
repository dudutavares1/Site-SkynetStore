import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicasComponent } from './dicas/dicas.component';
import { CrosshairComponent } from './crosshair/crosshair.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'dicas', component: DicasComponent },
  {path: 'Crosshair', component: CrosshairComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'Crosshair', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




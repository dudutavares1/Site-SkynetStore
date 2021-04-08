import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicasComponent } from './dicas/dicas.component';





const routes: Routes = [
  { path: 'dicas', component: DicasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

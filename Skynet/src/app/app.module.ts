import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DicasComponent } from './dicas/dicas.component';
import { CrosshairComponent } from './crosshair/crosshair.component';
import { TeamComponent } from './team/team.component';
import { ArmasComponent } from './loja/armas/armas.component';
import { FacasComponent } from './loja/facas/facas.component';
import { LuvasComponent } from './loja/luvas/luvas.component';
import { PromocaoComponent } from './loja/promocao/promocao.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RodapeComponent } from './rodape/rodape.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DicasComponent,
    CrosshairComponent,
    TeamComponent,
    ArmasComponent,
    FacasComponent,
    LuvasComponent,
    PromocaoComponent,
    MenuComponent,
    CadastroComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

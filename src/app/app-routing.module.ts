import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CombosAsadoComponent } from './componentes/combos-asado/combos-asado.component';
import { PlatosALaCartaComponent } from './componentes/platos-a-la-carta/platos-a-la-carta.component';

const routes: Routes = [
  { path: '', redirectTo: 'pollo-asado', pathMatch: 'full' },
  { path: 'pollo-asado', component: HomeComponent },
  { path: 'combo-asado', component: CombosAsadoComponent },
  { path: 'platos-a-la-carta', component: PlatosALaCartaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

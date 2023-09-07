import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CombosAsadoComponent } from './componentes/combos-asado/combos-asado.component';

const routes: Routes = [
  { path: '', redirectTo: 'pollo-asado', pathMatch: 'full' },
  {path:'pollo-asado', component:HomeComponent},
  {path:'combo-asado', component:CombosAsadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

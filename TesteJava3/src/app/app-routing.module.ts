import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { SobreComponent } from './component/sobre/sobre.component';

const routes: Routes = [
  {path: 'Teste', component: CounterComponent},
  {path: 'Sobre', component: SobreComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

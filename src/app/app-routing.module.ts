import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictResponseComponent } from './components/predict-response/predict-response.component';


const routes: Routes = [
  {path:'predict-response', component: PredictResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

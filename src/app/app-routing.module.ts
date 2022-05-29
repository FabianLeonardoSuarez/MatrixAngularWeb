import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplyComponent } from './multiply/multiply.component';
import { MultiplyresultComponent } from './multiplyresult/multiplyresult.component';

const routes: Routes = [
  { path: '', component: MultiplyComponent, pathMatch: 'full' },
  { path: 'multiplyresult', component: MultiplyresultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

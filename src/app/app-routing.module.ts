import { NgModule } from '@angular/core';
import {AppComponent} from './app.component'
import {DirectDatasourceComponent} from './direct-datasource/direct-datasource.component'
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: "/custom", pathMatch: 'full'},
  {path: 'custom', component: AppComponent},
  {path: 'direct', component: DirectDatasourceComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

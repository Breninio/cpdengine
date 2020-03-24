import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SetupComponent} from './setup/setup.component';
import {ProjectListComponent} from './project-list/project-list.component';


const routes: Routes = [
  { path: '', component: ProjectListComponent },
  { path: 'setup', component: SetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

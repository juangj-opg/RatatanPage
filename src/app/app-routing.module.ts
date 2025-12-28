import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkilsComponent } from './modules/ratatan/skils/skils.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { Layout2Component } from './shared/layout2/layout2.component';
import { BestiarioComponent } from './modules/bestiario/bestiario.component';
import { FormacionComponent } from './modules/ratatan/formacion/formacion.component';

const routes: Routes = [
  {
    path: 'ratatan',
    component: LayoutComponent,
    children: [{ path: 'skills', component: SkilsComponent }],
  },
  {
    path: 'ratatan',
    component: Layout2Component,
    children: [{ path: 'bestiario', component: BestiarioComponent }],
  },
  {
    path: 'ratatan',
    component: Layout2Component,
    children: [{ path: 'formacion', component: FormacionComponent }],
  },
  {
    path: '**',
    redirectTo: 'ratatan/skills'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

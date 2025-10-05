import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkilsComponent } from './modules/ratatan/skils/skils.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'ratatan',
    component: LayoutComponent,
    children: [{ path: 'skills', component: SkilsComponent }],
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

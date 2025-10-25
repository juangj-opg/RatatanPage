import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { Layout2Component } from './layout2/layout2.component';

@NgModule({
  declarations: [LayoutComponent, Layout2Component],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}

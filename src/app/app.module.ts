import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkilsComponent } from './modules/ratatan/skils/skils.component';
import { BestiarioComponent } from './modules/bestiario/bestiario.component';
import { RatakarutasComponent } from './modules/ratatan/ratakarutas/ratakarutas.component';
import { FormacionComponent } from './modules/ratatan/formacion/formacion.component';

@NgModule({
  declarations: [AppComponent, SkilsComponent, BestiarioComponent, RatakarutasComponent, FormacionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

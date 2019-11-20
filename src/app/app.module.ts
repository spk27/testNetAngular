import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePersonaComponent } from './create-persona/create-persona.component';


const modules = [
  MatTableModule,
  MatIconModule
];
const routes: Routes = [
  { path: 'personas', component: PersonaComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [...modules, NoopAnimationsModule],
  exports: [...modules],
  declarations: [CreatePersonaComponent]
})export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

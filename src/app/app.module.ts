import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
];
const routes: Routes = [
  { path: 'personas', component: PersonaComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})export class MaterialModule {};

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CreatePersonaComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  entryComponents: [
    CreatePersonaComponent,
    ConfirmationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

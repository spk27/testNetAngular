import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonasViewModel } from './personasViewModel';
import { CreatePersonaComponent } from '../create-persona/create-persona.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  private personas : PersonasViewModel[];
  displayedColumns: string[] = ['id', 'nombreCompleto', 'cargo', 'opciones'];
  crearPersonaDialog = false;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  getPersonas() {
    return this.http.get<PersonasViewModel[]>("http://localhost:6000/api/Personas").subscribe(data => {
      console.log(data);
      this.personas = data;
    });
  }

  createPersona() {
    const dialogRef = this.dialog.open(CreatePersonaComponent, {
    });
    dialogRef.componentInstance.onCreate.subscribe(_ => {
      this.getPersonas();
    });
    dialogRef.afterClosed().subscribe(_ => {
      dialogRef.componentInstance.onCreate.unsubscribe();
    });
    //this.crearPersonaDialog = !this.crearPersonaDialog;
  }

  updatePersona(persona) {
    alert('Se actualizó la persona: ' + JSON.stringify(persona));
  }

  deletePersona(persona: PersonasViewModel): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '600px',
      data: { type: 'info', msj: `Desea eliminar la persona ${persona.nombreCompleto}` }
    });

    dialogRef.componentInstance.onConfirm.subscribe(_ => {
      this.deleteCall(persona.id).subscribe(r => {
        this.getPersonas();
        this.dialog.open(ConfirmationComponent, {
          width: '600px',
          data: { type: 'success', msj: `Persona ${persona.nombreCompleto} eliminada` }
        });
      }, error => {
        this.dialog.open(ConfirmationComponent, {
          width: '600px',
          data: { type: 'error', msj: error }
        });
      })
    });
    dialogRef.afterClosed().subscribe(_ => {
      dialogRef.componentInstance.onConfirm.unsubscribe();
    });
  }

  public deleteCall (id: number): Observable<number> {
    return this.http.delete<number>(`http://localhost:6000/api/Personas/${id}`, this.httpOptions).pipe(
      tap(id => {})
    );
  }

  ngOnInit() {
    this.getPersonas();
      
  }

}

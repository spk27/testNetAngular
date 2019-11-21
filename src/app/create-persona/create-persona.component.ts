import { Component, OnInit, EventEmitter  } from '@angular/core';
import { createPersonaCommand } from './createPersonaCommand';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css']
})
export class CreatePersonaComponent implements OnInit {
  public nuevaPersona: createPersonaCommand = new createPersonaCommand();
  public onCreate = new EventEmitter();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    
  };

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<CreatePersonaComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createPersona() {
    this.createCall().subscribe(result => {
      this.onCreate.emit();
      console.log(result)
      this.onNoClick();
    });
  }
  
  public createCall (): Observable<number> {
    return this.http.post<number>("http://localhost:6000/api/Personas", this.nuevaPersona, this.httpOptions).pipe(
      tap(id => alert(`persona COw/ id=${id} creada`))
    );
  }

  ngOnInit() {
  }



}

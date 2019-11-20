import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonasViewModel } from './personasViewModel';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  private personas : PersonasViewModel[];
  displayedColumns: string[] = ['id', 'nombreCompleto', 'cargo', 'opciones'];
  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<PersonasViewModel[]>("http://localhost:6000/api/Personas");
  }

  createPersona(persona) {
    alert('Se agregó la persona: ' + JSON.stringify(persona));
  }
  updatePersona(persona) {
    alert('Se actualizó la persona: ' + JSON.stringify(persona));
  }
  deletePersona(persona) {
    alert('Se borró la persona: ' + JSON.stringify(persona));
  }

  ngOnInit() {
    this.getPersonas()
      .subscribe(data => {
        console.log(data);
        this.personas = data;
      });
  }

}

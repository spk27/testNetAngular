import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonaComponent } from './create-persona.component';

describe('CreatePersonaComponent', () => {
  let component: CreatePersonaComponent;
  let fixture: ComponentFixture<CreatePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

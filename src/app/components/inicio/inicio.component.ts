import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { PaisService } from 'src/app/service/pais.service';
import { EstadoService } from 'src/app/service/estado.service';
import { PersonaService } from 'src/app/service/persona.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  personaForm: FormGroup = new FormGroup({});
  paises: any;
  estado: any;
  personas : any;

  constructor(
    public fb: FormBuilder,
    public paisesService: PaisService,
    public estadoService:EstadoService,
    public personaService :PersonaService
  ) {

  }

  
  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required]

    });

    this.paisesService.listar_paises().subscribe(
      response => {
        this.paises = response;
      },
      error => {
        console.log(error)
      }
    );
    

    this.personaForm.get('pais')?.valueChanges.subscribe(value=>{
      this.estadoService.traerestados(value.id).subscribe(
        response=>{
          this.estado = response
        },error=>{
          console.log(error)
        }
      )
    })

    // this.personaService.RetornarPersonas().subscribe(response=>{
    //   this.personas = response;
    // },
    // error=>{
    //   console.log(error);
    // })

  }


  guardar(){
    this.personaService.guardarPersona(this.personaForm.value).subscribe(
      response=>{

      },
      error=>{
        console.log(error);
      }
    )
  }
}

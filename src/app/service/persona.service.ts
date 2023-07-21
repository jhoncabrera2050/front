import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders }  from '@angular/common/http';
import { global  } from "./global"
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public url;
  constructor(
    private _http:HttpClient,
  ) { 
    this.url = global.url
  }

  guardarPersona(persona:any) :Observable<any>{
    return this._http.post(this.url + "personas/", persona);
  }
}

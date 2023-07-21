import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient }  from '@angular/common/http';
import { global  } from "./global"
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public url;
  constructor(
    private _http:HttpClient,
  ) { 
    this.url = global.url
  }

  listar_paises():Observable<any>{
    return this._http.get(this.url + 'pais');
  }

}

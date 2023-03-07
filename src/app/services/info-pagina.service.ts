import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor( private http: HttpClient) {

    console.log('Servicio de InfoPágina listo.');

    //Leer archivo JSON

    this.http.get('assets/data')
   }
}

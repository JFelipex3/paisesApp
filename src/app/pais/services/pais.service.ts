import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com";

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/v3.1/name/${termino}`;

    this.http.get( url );
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/v2/capital/${termino}`;

    this.http.get( url );
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/v3.1/alpha/${id}`;

    this.http.get( url );
    return this.http.get<Country[]>( url );
  }
}
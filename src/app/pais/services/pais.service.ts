import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1/";

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,capital,flags,cioc,cca2' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    this.http.get( url );
    return this.http.get<Country[]>( url, {params: this.httpParams} );
  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;

    this.http.get( url );
    return this.http.get<Country[]>( url, {params: this.httpParams} );
  }

  getPaisPorAlpha( id: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/alpha/${id}`;

    this.http.get( url );
    return this.http.get<Country[]>( url );
  }

  buscarRegion( region: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${region}`;

    this.http.get( url );
    return this.http.get<Country[]>( url, {params: this.httpParams} );
  }
}
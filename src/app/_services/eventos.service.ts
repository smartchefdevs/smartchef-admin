import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Evento } from '../global/models/evento.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private urlServicio = 'http://back/api/eventos';
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  obtenerTodosLosEventos(): Observable<Evento[]> {
    return this.http.get(this.urlServicio).pipe(
      map( resp => resp as Evento[])
    );
  }

  obtenerEventoPorId(codigo: number): Observable<any> {
    return this.http.get(`${this.urlServicio}/${codigo}`).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  crearEvento(evento: Evento): Observable<any> {
    console.log('Service crear evento');
    return this.http.post(this.urlServicio, evento, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  editarEvento(evento: Evento): Observable<any> {
    console.log('Service editar evento');
    return this.http.put(`${this.urlServicio}/${evento.codigo}`, evento, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  eliminarEvento(codigo: number): Observable<any> {
    console.log('Service eliminar   evento');
    return this.http.delete(`${this.urlServicio}/${codigo}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }
}

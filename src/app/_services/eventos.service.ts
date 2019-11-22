import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Evento } from '../global/models/evento.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { AppSettings } from '../global/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private urlServicio: string;

  constructor(private http: HttpClient) {
    this.urlServicio = `${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/event`;
  }

  obtenerTodosLosEventos(): Observable<Evento[]> {
    return this.http.get(`${this.urlServicio}/list`).pipe(
      map( resp => resp as Evento[])
    );
  }

  obtenerEventoPorId(codigo: number): Observable<any> {
    return this.http.get(`${this.urlServicio}/index/${codigo}`).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  crearEvento(evento: Evento): Observable<any> {
    console.log('Service crear evento');

    const paramsEvento: any = {
      name: evento.name,
      description: evento.description,
      price: evento.price,
      lat_addr: evento.latAddr,
      lon_addr: evento.lonAddr,
      address: evento.address,
      id_chef: 15,
      id_state: evento.idState,
    };

    console.log(paramsEvento);

    return this.http.post(`${this.urlServicio}/create`, { params: paramsEvento }).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  editarEvento(evento: Evento): Observable<any> {
    console.log('Service editar evento');
    console.log(evento);
    return this.http.put(`${this.urlServicio}/update`, { params: evento }).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  eliminarEvento(id: number): Observable<any> {
    console.log('Service eliminar evento');
    return this.http.delete(`${this.urlServicio}/delete/${id}`).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }

  obtenerTodosLosChefs(): Observable<any> {
    return this.http.get<any[]>(`${AppSettings.API_ENDPOINT}:${AppSettings.API_PORT}/user/profile/2`).pipe(
      catchError(e => {
        console.error(e);
        return throwError(e);
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Evento } from '../../global/models/evento.model';
import { EventosService } from '../../_services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventosComponent implements OnInit {

  listaEventos: any[];
  listaChefs: any[];
  listaCategorias: any[];
  modalNuevo = false;
  modalTitulo = 'Nuevo Evento';
  eventoCrear = new Evento();
  opcEditar = false;

  constructor(private eventosService: EventosService) { }

  ngOnInit() {

    this.eventosService.obtenerTodosLosEventos()
      .subscribe((data: any) => {
        this.listaEventos = data.data;
        // console.log(this.listaEventos);
      });

    this.eventosService.obtenerTodosLosChefs()
      .subscribe((data: any) => {
        this.listaChefs = data.msg;
        // console.log(data.msg);
      });
  }

  crearEditarEvento() {
    if (!this.opcEditar) {
      this.eventoCrear.id = this.listaEventos.length + 1;
      this.eventosService.crearEvento(Evento.clone(this.eventoCrear))
      .subscribe(evento => {
          this.listaEventos.push(evento);
          console.log(evento);
        });
    } else {
      this.eventosService.editarEvento(Evento.clone(this.eventoCrear))
      .subscribe(evento => {
          this.listaEventos[this.eventoCrear.id - 1] = evento;
          console.log(evento);
        });
    }
    this.eventoCrear = new Evento();
    this.modalNuevo = false;
  }

  initEditarEvento(evento: Evento) {
    this.eventoCrear = new Evento(evento);
    console.log(this.eventoCrear);
    this.modalTitulo = 'Modificar Evento';
    this.modalNuevo = true;
    this.opcEditar = true;
  }

  eliminarEvento(codigo: any) {
    this.listaEventos.splice(codigo - 1, 1);
    this.eventosService.eliminarEvento(codigo)
      .subscribe(evento => {
        // console.log(evento);
      });
  }

  cerrarModal() {
    this.eventoCrear = new Evento();
    this.modalNuevo = false;
    this.opcEditar = false;
  }
}

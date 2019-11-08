import { Component, OnInit } from '@angular/core';
import { Evento } from '../../global/models/evento.model';
import { EventosService } from '../../_services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventosComponent implements OnInit {

  tempData: Evento[];
  listaChefs: any[];
  listaCategorias: any[];
  modalNuevo = false;
  modalTitulo = 'Nuevo Evento';
  eventoCrear = new Evento();
  opcEditar = false;

  constructor(private eventosService: EventosService) { }

  ngOnInit() {
    this.tempData = [
      { codigo: 1,
        evento: 'Cena Especial Pareja',
        chef: 'Daniel Céspedes',
        ubicacion: 'Nueva Zelanda / Suba',
        precio: '120.000',
        disponibilidad: '10 cupos',
        categoria: 'Comida Italiana'
      },
      { codigo: 2,
        evento: 'Cena en Familia',
        chef: 'Victoria Hoyos',
        ubicacion: 'Cedritos / Usaquén',
        precio: '250.000',
        disponibilidad: '5 cupos',
        categoria: 'Comida Francesa'
      },
     ];

    this.listaChefs = [
      { id: 1, nombre: 'Daniel Céspedes' },
      { id: 2, nombre: 'Katherin Acosta' },
      { id: 3, nombre: 'Victoria Hoyos' },
    ];

    this.listaCategorias = [
      { id: 1, nombre: 'Comida Italiana' },
      { id: 2, nombre: 'Comida Francesa' },
      { id: 3, nombre: 'Comida Rápida' },
    ];
  }

  crearEditarEvento() {
    if (!this.opcEditar) {
      this.eventoCrear.codigo = this.tempData.length + 1;
      this.tempData.push(this.eventoCrear);
      this.eventosService.crearEvento(this.eventoCrear)
        .subscribe(evento => {
          console.log(evento);
        });
    } else {
      this.tempData[this.eventoCrear.codigo - 1] = this.eventoCrear;
      this.eventosService.editarEvento(this.eventoCrear)
        .subscribe(evento => {
          console.log(evento);
        });
    }
    this.eventoCrear = new Evento();
    this.modalNuevo = false;
  }

  initEditarEvento(evento: Evento) {
    this.eventoCrear = evento;
    this.modalTitulo = 'Modificar Evento';
    this.modalNuevo = true;
    this.opcEditar = true;
  }

  eliminarEvento(codigo: any) {
    this.tempData.splice(codigo - 1, 1);
    this.eventosService.eliminarEvento(codigo)
      .subscribe(evento => {
        console.log(evento);
      });
  }

  cerrarModal() {
    this.eventoCrear = new Evento();
    this.modalNuevo = false;
    this.opcEditar = false;
  }
}
import {Entity, model, property} from '@loopback/repository';

@model()
export class RecepcionFruta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  
  @property({
    type: 'string',
    required: true,
  })
  folio: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;

  @property({
    type: 'string',
    required: true,
  })
  idProductor: string;

  @property({
    type: 'string',
    required: true,
  })
  idTransporte: string;

  @property({
    type: 'string',
    required: true,
  })
  idOperador: string;

  @property({
    type: 'string',
    required: true,
  })
  idHuerta: string;

  @property({
    type: 'string',
    required: true,
  })
  idFruta: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;


  constructor(data?: Partial<RecepcionFruta>) {
    super(data);
  }
}

export interface RecepcionFrutaRelations {
  // describe navigational properties here
}

export type RecepcionFrutaWithRelations = RecepcionFruta & RecepcionFrutaRelations;

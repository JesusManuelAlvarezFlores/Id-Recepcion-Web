import {Entity, model, property} from '@loopback/repository';

@model()
export class Huerta extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  idProductor: string;


  constructor(data?: Partial<Huerta>) {
    super(data);
  }
}

export interface HuertaRelations {
  // describe navigational properties here
}

export type HuertaWithRelations = Huerta & HuertaRelations;

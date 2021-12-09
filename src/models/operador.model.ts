import {Entity, model, property} from '@loopback/repository';

@model()
export class Operador extends Entity {
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
  telefono: string;


  constructor(data?: Partial<Operador>) {
    super(data);
  }
}

export interface OperadorRelations {
  // describe navigational properties here
}

export type OperadorWithRelations = Operador & OperadorRelations;

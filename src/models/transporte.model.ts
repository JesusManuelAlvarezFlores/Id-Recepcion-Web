import {Entity, model, property} from '@loopback/repository';

@model()
export class Transporte extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'number',
    required: true,
  })
  capacidad: number;


  constructor(data?: Partial<Transporte>) {
    super(data);
  }
}

export interface TransporteRelations {
  // describe navigational properties here
}

export type TransporteWithRelations = Transporte & TransporteRelations;

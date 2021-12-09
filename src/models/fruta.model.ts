import {Entity, model, property} from '@loopback/repository';

@model()
export class Fruta extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

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


  constructor(data?: Partial<Fruta>) {
    super(data);
  }
}

export interface FrutaRelations {
  // describe navigational properties here
}

export type FrutaWithRelations = Fruta & FrutaRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Productor extends Entity {
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

  @property({
    type: 'string',
    required: true,
  })
  correo: string;


  constructor(data?: Partial<Productor>) {
    super(data);
  }
}

export interface ProductorRelations {
  // describe navigational properties here
}

export type ProductorWithRelations = Productor & ProductorRelations;

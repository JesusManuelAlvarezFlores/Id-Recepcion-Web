import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductorOperador extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  idProductor: string;

  @property({
    type: 'string',
    required: true,
  })
  idOperador: string;


  constructor(data?: Partial<ProductorOperador>) {
    super(data);
  }
}

export interface ProductorOperadorRelations {
  // describe navigational properties here
}

export type ProductorOperadorWithRelations = ProductorOperador & ProductorOperadorRelations;

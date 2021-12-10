import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductorTransporte extends Entity {
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
  idProductor: string;

  @property({
    type: 'string',
    required: true,
  })
  idTransporte: string;


  constructor(data?: Partial<ProductorTransporte>) {
    super(data);
  }
}

export interface ProductorTransporteRelations {
  // describe navigational properties here
}

export type ProductorTransporteWithRelations = ProductorTransporte & ProductorTransporteRelations;

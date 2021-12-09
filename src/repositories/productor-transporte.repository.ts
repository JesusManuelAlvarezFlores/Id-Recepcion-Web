import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {ProductorTransporte, ProductorTransporteRelations} from '../models';

export class ProductorTransporteRepository extends DefaultCrudRepository<
  ProductorTransporte,
  typeof ProductorTransporte.prototype.id,
  ProductorTransporteRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(ProductorTransporte, dataSource);
  }
}

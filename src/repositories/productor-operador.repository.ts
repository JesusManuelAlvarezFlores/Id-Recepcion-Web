import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {ProductorOperador, ProductorOperadorRelations} from '../models';

export class ProductorOperadorRepository extends DefaultCrudRepository<
  ProductorOperador,
  typeof ProductorOperador.prototype.id,
  ProductorOperadorRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(ProductorOperador, dataSource);
  }
}

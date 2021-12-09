import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Productor, ProductorRelations} from '../models';

export class ProductorRepository extends DefaultCrudRepository<
  Productor,
  typeof Productor.prototype.id,
  ProductorRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Productor, dataSource);
  }
}

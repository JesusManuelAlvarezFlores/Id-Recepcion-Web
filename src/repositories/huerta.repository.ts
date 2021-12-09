import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Huerta, HuertaRelations} from '../models';

export class HuertaRepository extends DefaultCrudRepository<
  Huerta,
  typeof Huerta.prototype.id,
  HuertaRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Huerta, dataSource);
  }
}

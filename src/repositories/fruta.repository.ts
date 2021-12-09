import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Fruta, FrutaRelations} from '../models';

export class FrutaRepository extends DefaultCrudRepository<
  Fruta,
  typeof Fruta.prototype.id,
  FrutaRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Fruta, dataSource);
  }
}

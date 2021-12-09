import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Transporte, TransporteRelations} from '../models';

export class TransporteRepository extends DefaultCrudRepository<
  Transporte,
  typeof Transporte.prototype.id,
  TransporteRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Transporte, dataSource);
  }
}

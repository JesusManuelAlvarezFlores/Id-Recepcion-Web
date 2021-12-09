import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {RecepcionFruta, RecepcionFrutaRelations} from '../models';

export class RecepcionFrutaRepository extends DefaultCrudRepository<
  RecepcionFruta,
  typeof RecepcionFruta.prototype.id,
  RecepcionFrutaRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(RecepcionFruta, dataSource);
  }
}

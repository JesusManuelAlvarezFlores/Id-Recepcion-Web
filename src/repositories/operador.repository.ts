import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Operador, OperadorRelations} from '../models';

export class OperadorRepository extends DefaultCrudRepository<
  Operador,
  typeof Operador.prototype.id,
  OperadorRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Operador, dataSource);
  }
}

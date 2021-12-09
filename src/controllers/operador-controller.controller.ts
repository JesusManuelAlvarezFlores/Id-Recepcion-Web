import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Operador} from '../models';
import {OperadorRepository} from '../repositories';

export class OperadorControllerController {
  constructor(
    @repository(OperadorRepository)
    public operadorRepository : OperadorRepository,
  ) {}

  @post('/operadors')
  @response(200, {
    description: 'Operador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Operador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Operador, {
            title: 'NewOperador',
            exclude: ['id'],
          }),
        },
      },
    })
    operador: Omit<Operador, 'id'>,
  ): Promise<Operador> {
    return this.operadorRepository.create(operador);
  }

  @get('/operadors/count')
  @response(200, {
    description: 'Operador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Operador) where?: Where<Operador>,
  ): Promise<Count> {
    return this.operadorRepository.count(where);
  }

  @get('/operadors')
  @response(200, {
    description: 'Array of Operador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Operador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Operador) filter?: Filter<Operador>,
  ): Promise<Operador[]> {
    return this.operadorRepository.find(filter);
  }

  @patch('/operadors')
  @response(200, {
    description: 'Operador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Operador, {partial: true}),
        },
      },
    })
    operador: Operador,
    @param.where(Operador) where?: Where<Operador>,
  ): Promise<Count> {
    return this.operadorRepository.updateAll(operador, where);
  }

  @get('/operadors/{id}')
  @response(200, {
    description: 'Operador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Operador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Operador, {exclude: 'where'}) filter?: FilterExcludingWhere<Operador>
  ): Promise<Operador> {
    return this.operadorRepository.findById(id, filter);
  }

  @patch('/operadors/{id}')
  @response(204, {
    description: 'Operador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Operador, {partial: true}),
        },
      },
    })
    operador: Operador,
  ): Promise<void> {
    await this.operadorRepository.updateById(id, operador);
  }

  @put('/operadors/{id}')
  @response(204, {
    description: 'Operador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() operador: Operador,
  ): Promise<void> {
    await this.operadorRepository.replaceById(id, operador);
  }

  @del('/operadors/{id}')
  @response(204, {
    description: 'Operador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.operadorRepository.deleteById(id);
  }
}

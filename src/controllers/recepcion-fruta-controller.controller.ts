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
import {RecepcionFruta} from '../models';
import {RecepcionFrutaRepository} from '../repositories';

export class RecepcionFrutaControllerController {
  constructor(
    @repository(RecepcionFrutaRepository)
    public recepcionFrutaRepository : RecepcionFrutaRepository,
  ) {}

  @post('/recepcion-frutas')
  @response(200, {
    description: 'RecepcionFruta model instance',
    content: {'application/json': {schema: getModelSchemaRef(RecepcionFruta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecepcionFruta, {
            title: 'NewRecepcionFruta',
            exclude: ['id'],
          }),
        },
      },
    })
    recepcionFruta: Omit<RecepcionFruta, 'id'>,
  ): Promise<RecepcionFruta> {
    return this.recepcionFrutaRepository.create(recepcionFruta);
  }

  @get('/recepcion-frutas/count')
  @response(200, {
    description: 'RecepcionFruta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RecepcionFruta) where?: Where<RecepcionFruta>,
  ): Promise<Count> {
    return this.recepcionFrutaRepository.count(where);
  }

  @get('/recepcion-frutas')
  @response(200, {
    description: 'Array of RecepcionFruta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RecepcionFruta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RecepcionFruta) filter?: Filter<RecepcionFruta>,
  ): Promise<RecepcionFruta[]> {
    return this.recepcionFrutaRepository.find(filter);
  }

  @patch('/recepcion-frutas')
  @response(200, {
    description: 'RecepcionFruta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecepcionFruta, {partial: true}),
        },
      },
    })
    recepcionFruta: RecepcionFruta,
    @param.where(RecepcionFruta) where?: Where<RecepcionFruta>,
  ): Promise<Count> {
    return this.recepcionFrutaRepository.updateAll(recepcionFruta, where);
  }

  @get('/recepcion-frutas/{id}')
  @response(200, {
    description: 'RecepcionFruta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RecepcionFruta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RecepcionFruta, {exclude: 'where'}) filter?: FilterExcludingWhere<RecepcionFruta>
  ): Promise<RecepcionFruta> {
    return this.recepcionFrutaRepository.findById(id, filter);
  }

  @patch('/recepcion-frutas/{id}')
  @response(204, {
    description: 'RecepcionFruta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RecepcionFruta, {partial: true}),
        },
      },
    })
    recepcionFruta: RecepcionFruta,
  ): Promise<void> {
    await this.recepcionFrutaRepository.updateById(id, recepcionFruta);
  }

  @put('/recepcion-frutas/{id}')
  @response(204, {
    description: 'RecepcionFruta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() recepcionFruta: RecepcionFruta,
  ): Promise<void> {
    await this.recepcionFrutaRepository.replaceById(id, recepcionFruta);
  }

  @del('/recepcion-frutas/{id}')
  @response(204, {
    description: 'RecepcionFruta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.recepcionFrutaRepository.deleteById(id);
  }
}

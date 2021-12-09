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
import {Fruta} from '../models';
import {FrutaRepository} from '../repositories';

export class FrutaControllerController {
  constructor(
    @repository(FrutaRepository)
    public frutaRepository : FrutaRepository,
  ) {}

  @post('/frutas')
  @response(200, {
    description: 'Fruta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fruta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fruta, {
            title: 'NewFruta',
            exclude: ['id'],
          }),
        },
      },
    })
    fruta: Omit<Fruta, 'id'>,
  ): Promise<Fruta> {
    return this.frutaRepository.create(fruta);
  }

  @get('/frutas/count')
  @response(200, {
    description: 'Fruta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fruta) where?: Where<Fruta>,
  ): Promise<Count> {
    return this.frutaRepository.count(where);
  }

  @get('/frutas')
  @response(200, {
    description: 'Array of Fruta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fruta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fruta) filter?: Filter<Fruta>,
  ): Promise<Fruta[]> {
    return this.frutaRepository.find(filter);
  }

  @patch('/frutas')
  @response(200, {
    description: 'Fruta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fruta, {partial: true}),
        },
      },
    })
    fruta: Fruta,
    @param.where(Fruta) where?: Where<Fruta>,
  ): Promise<Count> {
    return this.frutaRepository.updateAll(fruta, where);
  }

  @get('/frutas/{id}')
  @response(200, {
    description: 'Fruta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fruta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Fruta, {exclude: 'where'}) filter?: FilterExcludingWhere<Fruta>
  ): Promise<Fruta> {
    return this.frutaRepository.findById(id, filter);
  }

  @patch('/frutas/{id}')
  @response(204, {
    description: 'Fruta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fruta, {partial: true}),
        },
      },
    })
    fruta: Fruta,
  ): Promise<void> {
    await this.frutaRepository.updateById(id, fruta);
  }

  @put('/frutas/{id}')
  @response(204, {
    description: 'Fruta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fruta: Fruta,
  ): Promise<void> {
    await this.frutaRepository.replaceById(id, fruta);
  }

  @del('/frutas/{id}')
  @response(204, {
    description: 'Fruta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.frutaRepository.deleteById(id);
  }
}

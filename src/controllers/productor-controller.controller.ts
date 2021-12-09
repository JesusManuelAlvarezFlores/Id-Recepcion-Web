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
import {Productor} from '../models';
import {ProductorRepository} from '../repositories';

export class ProductorControllerController {
  constructor(
    @repository(ProductorRepository)
    public productorRepository : ProductorRepository,
  ) {}

  @post('/productors')
  @response(200, {
    description: 'Productor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Productor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productor, {
            title: 'NewProductor',
            exclude: ['id'],
          }),
        },
      },
    })
    productor: Omit<Productor, 'id'>,
  ): Promise<Productor> {
    return this.productorRepository.create(productor);
  }

  @get('/productors/count')
  @response(200, {
    description: 'Productor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Productor) where?: Where<Productor>,
  ): Promise<Count> {
    return this.productorRepository.count(where);
  }

  @get('/productors')
  @response(200, {
    description: 'Array of Productor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Productor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Productor) filter?: Filter<Productor>,
  ): Promise<Productor[]> {
    return this.productorRepository.find(filter);
  }

  @patch('/productors')
  @response(200, {
    description: 'Productor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productor, {partial: true}),
        },
      },
    })
    productor: Productor,
    @param.where(Productor) where?: Where<Productor>,
  ): Promise<Count> {
    return this.productorRepository.updateAll(productor, where);
  }

  @get('/productors/{id}')
  @response(200, {
    description: 'Productor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Productor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Productor, {exclude: 'where'}) filter?: FilterExcludingWhere<Productor>
  ): Promise<Productor> {
    return this.productorRepository.findById(id, filter);
  }

  @patch('/productors/{id}')
  @response(204, {
    description: 'Productor PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productor, {partial: true}),
        },
      },
    })
    productor: Productor,
  ): Promise<void> {
    await this.productorRepository.updateById(id, productor);
  }

  @put('/productors/{id}')
  @response(204, {
    description: 'Productor PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productor: Productor,
  ): Promise<void> {
    await this.productorRepository.replaceById(id, productor);
  }

  @del('/productors/{id}')
  @response(204, {
    description: 'Productor DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productorRepository.deleteById(id);
  }
}

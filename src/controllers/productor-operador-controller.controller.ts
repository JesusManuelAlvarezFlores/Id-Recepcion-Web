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
import {ProductorOperador} from '../models';
import {ProductorOperadorRepository} from '../repositories';

export class ProductorOperadorControllerController {
  constructor(
    @repository(ProductorOperadorRepository)
    public productorOperadorRepository : ProductorOperadorRepository,
  ) {}

  @post('/productor-operadors')
  @response(200, {
    description: 'ProductorOperador model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProductorOperador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductorOperador, {
            title: 'NewProductorOperador',
            exclude: ['id'],
          }),
        },
      },
    })
    productorOperador: Omit<ProductorOperador, 'id'>,
  ): Promise<ProductorOperador> {
    return this.productorOperadorRepository.create(productorOperador);
  }

  @get('/productor-operadors/count')
  @response(200, {
    description: 'ProductorOperador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProductorOperador) where?: Where<ProductorOperador>,
  ): Promise<Count> {
    return this.productorOperadorRepository.count(where);
  }

  @get('/productor-operadors')
  @response(200, {
    description: 'Array of ProductorOperador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProductorOperador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProductorOperador) filter?: Filter<ProductorOperador>,
  ): Promise<ProductorOperador[]> {
    return this.productorOperadorRepository.find(filter);
  }

  @patch('/productor-operadors')
  @response(200, {
    description: 'ProductorOperador PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductorOperador, {partial: true}),
        },
      },
    })
    productorOperador: ProductorOperador,
    @param.where(ProductorOperador) where?: Where<ProductorOperador>,
  ): Promise<Count> {
    return this.productorOperadorRepository.updateAll(productorOperador, where);
  }

  @get('/productor-operadors/{id}')
  @response(200, {
    description: 'ProductorOperador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProductorOperador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProductorOperador, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductorOperador>
  ): Promise<ProductorOperador> {
    return this.productorOperadorRepository.findById(id, filter);
  }

  @patch('/productor-operadors/{id}')
  @response(204, {
    description: 'ProductorOperador PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductorOperador, {partial: true}),
        },
      },
    })
    productorOperador: ProductorOperador,
  ): Promise<void> {
    await this.productorOperadorRepository.updateById(id, productorOperador);
  }

  @put('/productor-operadors/{id}')
  @response(204, {
    description: 'ProductorOperador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productorOperador: ProductorOperador,
  ): Promise<void> {
    await this.productorOperadorRepository.replaceById(id, productorOperador);
  }

  @del('/productor-operadors/{id}')
  @response(204, {
    description: 'ProductorOperador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productorOperadorRepository.deleteById(id);
  }
}

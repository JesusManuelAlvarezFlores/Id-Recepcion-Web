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
import {ProductorTransporte} from '../models';
import {ProductorTransporteRepository} from '../repositories';

export class ProductorTransporteControllerController {
  constructor(
    @repository(ProductorTransporteRepository)
    public productorTransporteRepository : ProductorTransporteRepository,
  ) {}

  @post('/productor-transportes')
  @response(200, {
    description: 'ProductorTransporte model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProductorTransporte)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductorTransporte, {
            title: 'NewProductorTransporte',
            exclude: ['id'],
          }),
        },
      },
    })
    productorTransporte: Omit<ProductorTransporte, 'id'>,
  ): Promise<ProductorTransporte> {
    return this.productorTransporteRepository.create(productorTransporte);
  }

  @get('/productor-transportes/count')
  @response(200, {
    description: 'ProductorTransporte model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProductorTransporte) where?: Where<ProductorTransporte>,
  ): Promise<Count> {
    return this.productorTransporteRepository.count(where);
  }

  @get('/productor-transportes')
  @response(200, {
    description: 'Array of ProductorTransporte model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProductorTransporte, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProductorTransporte) filter?: Filter<ProductorTransporte>,
  ): Promise<ProductorTransporte[]> {
    return this.productorTransporteRepository.find(filter);
  }

  @patch('/productor-transportes')
  @response(200, {
    description: 'ProductorTransporte PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductorTransporte, {partial: true}),
        },
      },
    })
    productorTransporte: ProductorTransporte,
    @param.where(ProductorTransporte) where?: Where<ProductorTransporte>,
  ): Promise<Count> {
    return this.productorTransporteRepository.updateAll(productorTransporte, where);
  }

  @get('/productor-transportes/{id}')
  @response(200, {
    description: 'ProductorTransporte model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProductorTransporte, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProductorTransporte, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductorTransporte>
  ): Promise<ProductorTransporte> {
    return this.productorTransporteRepository.findById(id, filter);
  }

  @patch('/productor-transportes/{id}')
  @response(204, {
    description: 'ProductorTransporte PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductorTransporte, {partial: true}),
        },
      },
    })
    productorTransporte: ProductorTransporte,
  ): Promise<void> {
    await this.productorTransporteRepository.updateById(id, productorTransporte);
  }

  @put('/productor-transportes/{id}')
  @response(204, {
    description: 'ProductorTransporte PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productorTransporte: ProductorTransporte,
  ): Promise<void> {
    await this.productorTransporteRepository.replaceById(id, productorTransporte);
  }

  @del('/productor-transportes/{id}')
  @response(204, {
    description: 'ProductorTransporte DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productorTransporteRepository.deleteById(id);
  }
}

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
import {Huerta} from '../models';
import {HuertaRepository} from '../repositories';

export class HuertaControllerController {
  constructor(
    @repository(HuertaRepository)
    public huertaRepository : HuertaRepository,
  ) {}

  @post('/huertas')
  @response(200, {
    description: 'Huerta model instance',
    content: {'application/json': {schema: getModelSchemaRef(Huerta)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Huerta, {
            title: 'NewHuerta',
            exclude: ['id'],
          }),
        },
      },
    })
    huerta: Omit<Huerta, 'id'>,
  ): Promise<Huerta> {
    return this.huertaRepository.create(huerta);
  }

  @get('/huertas/count')
  @response(200, {
    description: 'Huerta model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Huerta) where?: Where<Huerta>,
  ): Promise<Count> {
    return this.huertaRepository.count(where);
  }

  @get('/huertas')
  @response(200, {
    description: 'Array of Huerta model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Huerta, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Huerta) filter?: Filter<Huerta>,
  ): Promise<Huerta[]> {
    return this.huertaRepository.find(filter);
  }

  @patch('/huertas')
  @response(200, {
    description: 'Huerta PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Huerta, {partial: true}),
        },
      },
    })
    huerta: Huerta,
    @param.where(Huerta) where?: Where<Huerta>,
  ): Promise<Count> {
    return this.huertaRepository.updateAll(huerta, where);
  }

  @get('/huertas/{id}')
  @response(200, {
    description: 'Huerta model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Huerta, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Huerta, {exclude: 'where'}) filter?: FilterExcludingWhere<Huerta>
  ): Promise<Huerta> {
    return this.huertaRepository.findById(id, filter);
  }

  @patch('/huertas/{id}')
  @response(204, {
    description: 'Huerta PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Huerta, {partial: true}),
        },
      },
    })
    huerta: Huerta,
  ): Promise<void> {
    await this.huertaRepository.updateById(id, huerta);
  }

  @put('/huertas/{id}')
  @response(204, {
    description: 'Huerta PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() huerta: Huerta,
  ): Promise<void> {
    await this.huertaRepository.replaceById(id, huerta);
  }

  @del('/huertas/{id}')
  @response(204, {
    description: 'Huerta DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.huertaRepository.deleteById(id);
  }
}

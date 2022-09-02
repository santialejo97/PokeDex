import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { PokeResponse } from './interfaces/poke_response.interface';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

import { AxiosAdapter } from 'src/common/http_adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly httpServices: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.httpServices.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    // const insertPromiseArray = [];
    const pokemonToInsert: { name: string; no: number }[] = [];
    data.results.forEach(({ name, url }) => {
      const segmentos = url.split('/');
      const no: number = +segmentos[segmentos.length - 2];
      console.log({ name, no });
      // await this.pokemonModel.create({ name, no });
      // insertPromiseArray.push(this.pokemonModel.create({ name, no }));
      pokemonToInsert.push({ name, no });
    });

    // await Promise.all(insertPromiseArray);
    await this.pokemonModel.insertMany(pokemonToInsert);
    return data.results;
  }
}

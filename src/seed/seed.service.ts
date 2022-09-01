import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke_response.interface';

@Injectable()
export class SeedService {
  private readonly axiosInstance: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axiosInstance.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach(({ name, url }) => {
      const segmentos = url.split('/');
      const no: number = +segmentos[segmentos.length - 2];
      console.log({ name, no });
    });
    return data.results;
  }
}

import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from 'src/seed/interfaces/poke_response.interface';
import { HttpApadter } from '../interfaces/http-adapter.interfaces';

@Injectable()
export class AxiosAdapter implements HttpApadter {
  private axiosInstance: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('This is a error of Axios');
    }
  }
}

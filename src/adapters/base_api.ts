import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export class BaseApi {
  protected client: AxiosInstance;

  constructor(config?: CreateAxiosDefaults) {
    this.client = axios.create(config);
  }
}

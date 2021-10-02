import process from 'process'
import { configuration as prodConfig } from './prod.config'
import { configuration as devConfig } from './default.config'

export interface Config {
  app: {
    port: number;
    name: string;
    playground: boolean;
  },
  database: {
    host: string;
    port: number;
    name: string;
    user: string;
    pass: string;
  }
}


export function loadConfiguration(): Config {
  console.log(`Using environment: '${process.env.NODE_ENV}'`)
  switch (process.env.NODE_ENV) {
    case 'prod':
      return prodConfig
    case 'development':
    default:
      return devConfig
  }
}

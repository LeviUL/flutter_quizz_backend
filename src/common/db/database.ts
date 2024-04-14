import { DataSource } from 'typeorm';
import { entities } from './entities';
import configuration from 'src/config/configuration';

const { host, port, user, password, database } = configuration().database;

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: host,
        port: port,
        username: user,
        password: password,
        database: database,
        entities: entities,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

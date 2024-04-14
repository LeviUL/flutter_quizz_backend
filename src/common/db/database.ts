import { DataSource } from 'typeorm';
import { entities } from './entities';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'mysqlpassword',
        database: 'quizz_flutter',
        entities: entities,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

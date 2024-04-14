import { CATEGORY_REPOSITORY, DATA_SOURCE } from 'src/common/consts';
import { Category } from './category.entity';
import { DataSource } from 'typeorm';

export const categoryRepository = [
  {
    provide: CATEGORY_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Category),
    inject: [DATA_SOURCE],
  },
];

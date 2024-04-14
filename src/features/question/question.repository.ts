import { DATA_SOURCE, QUESTION_REPOSITORY } from 'src/common/consts';
import { DataSource } from 'typeorm';
import { Question } from './question.entity';

export const questionRepository = [
  {
    provide: QUESTION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Question),
    inject: [DATA_SOURCE],
  },
];

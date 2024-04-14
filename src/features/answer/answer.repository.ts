import { ANSWER_REPOSITORY, DATA_SOURCE } from 'src/common/consts';
import { DataSource } from 'typeorm';
import { Answer } from './answer.entity';

export const answerRepository = [
  {
    provide: ANSWER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Answer),
    inject: [DATA_SOURCE],
  },
];

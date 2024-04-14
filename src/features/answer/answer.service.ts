import { Inject, Injectable } from '@nestjs/common';
import { Answer } from './answer.entity';
import { ANSWER_REPOSITORY } from 'src/common/consts';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService {
  constructor(
    @Inject(ANSWER_REPOSITORY)
    private answerRepository: Repository<Answer>,
  ) {}

  async findAll(): Promise<Answer[]> {
    return await this.answerRepository.find();
  }
}

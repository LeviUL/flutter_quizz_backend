import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/db/database.module';
import { answerRepository } from './answer.repository';
import { AnswerService } from './answer.service';

@Module({
  imports: [DatabaseModule],
  providers: [...answerRepository, AnswerService],
})
export class AnswerModule {}

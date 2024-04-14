import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/db/database.module';
import { questionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [DatabaseModule, CategoryModule],
  controllers: [QuestionController],
  providers: [...questionRepository, QuestionService],
})
export class QuestionModule {}

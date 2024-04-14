import { Module } from '@nestjs/common';

import { QuestionModule } from './features/question/question.module';
import { CategoryModule } from './features/category/category.module';

@Module({
  imports: [QuestionModule, CategoryModule],
})
export class AppModule {}

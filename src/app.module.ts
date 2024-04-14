import { Module } from '@nestjs/common';

import { QuestionModule } from './features/question/question.module';
import { CategoryModule } from './features/category/category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [QuestionModule, CategoryModule, ConfigModule.forRoot()],
})
export class AppModule {}

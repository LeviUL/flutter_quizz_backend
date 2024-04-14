import { DatabaseModule } from 'src/common/db/database.module';
import { CategoryController } from './category.controller';
import { categoryRepository } from './category.repository';
import { CategoryService } from './category.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [...categoryRepository, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}

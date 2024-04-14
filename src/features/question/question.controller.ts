import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dtos/CreatQuestionDto';

type CategoryQueryParams = {
  categoryId: string;
};

@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get()
  async findAll(@Query() query: CategoryQueryParams) {
    return await this.questionService.findAll(query.categoryId);
  }

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      return await this.questionService.create(createQuestionDto);
    } catch (error) {
      throw new HttpException(
        'Failed to create question',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

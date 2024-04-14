import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dtos/CreatQuestionDto';
import { v4 as uuidv4 } from 'uuid';
import { Answer } from '../answer/answer.entity';
import { QUESTION_REPOSITORY } from 'src/common/consts';
import { CategoryService } from '../category/category.service';

@Injectable()
export class QuestionService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private questionRepository: Repository<Question>,
    private categoryService: CategoryService,
  ) {}

  async findAll(categoryId?: string): Promise<Question[]> {
    const result = await this.questionRepository.find(
      categoryId
        ? {
            where: { ['categoryId']: categoryId },
            loadEagerRelations: true,
          }
        : {
            loadEagerRelations: true,
          },
    );
    return result;
  }

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const question = new Question();
    const existingCategory = this.categoryService.findById(
      createQuestionDto.categoryId,
    );
    if (!existingCategory) {
      throw new HttpException(
        "Category doesn't exist!",
        HttpStatus.BAD_REQUEST,
      );
    }

    const wrongAnswers = createQuestionDto.wrongAnswers.map((answer) => {
      const result = new Answer();

      result.id = uuidv4();
      result.value = answer;
      result.questionId = question.id;
      return result;
    });

    const goodAnswer = new Answer();
    goodAnswer.id = uuidv4();
    goodAnswer.value = createQuestionDto.goodAnswer;
    goodAnswer.questionId = question.id;

    question.id = uuidv4();
    question.question = createQuestionDto.question;
    question.options = [...wrongAnswers, goodAnswer];
    question.answerId = goodAnswer.id;
    question.categoryId = createQuestionDto.categoryId;

    await this.questionRepository.save(question);
    return question;
  }
}

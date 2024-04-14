import { IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  readonly question: string;

  @IsString({ each: true })
  readonly wrongAnswers: string[];

  @IsString()
  readonly goodAnswer: string;

  @IsString()
  readonly categoryId: string;
}

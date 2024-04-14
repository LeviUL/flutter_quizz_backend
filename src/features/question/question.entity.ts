import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from '../answer/answer.entity';
import { Category } from '../category/category.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  question: string;

  @OneToMany(() => Answer, (answer) => answer.questionId, {
    cascade: true,
    eager: true,
  })
  options: Answer[];

  @Column()
  answerId: string;

  @Column()
  @ManyToOne(() => Category, (category) => category.questions)
  @JoinColumn({ name: 'categoryId' })
  categoryId: string;
}

import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CATEGORY_REPOSITORY } from 'src/common/consts';
import { v4 as uuidv4 } from 'uuid';
import { CreateCategoryDto } from './dto/CreateCategoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    console.log('getting categories...');
    const result = await this.categoryRepository.find();
    return result;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const existingCategory = await this.categoryRepository.findOne({
      where: { name: createCategoryDto.name },
    });

    if (existingCategory) {
      throw new HttpException(
        'Category already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    const category = new Category();
    category.id = uuidv4();
    category.name = createCategoryDto.name;
    category.questions = [];

    await this.categoryRepository.save(category);
    return category;
  }

  async findById(id: string): Promise<Category | null> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    return category;
  }
}

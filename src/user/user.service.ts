import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { profile } from 'console';
import { User } from 'src/common/entitiy/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(userDto) {
    try {
      const saveUser = await this.userRepository.save({
        name: userDto.name,
      });

      return {
        success: true,
        message: 'User Created Successfully',
        result: saveUser,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async getUsers(id) {
    return this.userRepository.find({ relations: ['profile'] });
  }

  async getAllWithPagination(paginationDto) {
    const { page, pagelimit } = paginationDto;
    const skip = (page - 1) * pagelimit;

    return await this.userRepository.find({
      skip,
      take: pagelimit,
    });
  }
}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/common/dto/user.dto';
import { PaginationDto } from 'src/common/dto/paginationDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDto) {
    return await this.userService.createUser(userDto);
  }

  @Get('/:id')
  async getUsers(@Param('id') id: string) {
    return await this.userService.getUsers(id);
  }

  @Get()
  async getAllWithPagination(@Query() paginationDto: PaginationDto) {
    return await this.userService.getAllWithPagination(paginationDto);
  }
}

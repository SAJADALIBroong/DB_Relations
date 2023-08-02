import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from 'src/common/dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() profileDto: ProfileDto) {
    return this.profileService.createProfile(profileDto);
  }

  @Get()
  async findAll() {
    return this.profileService.findAll();
  }
}

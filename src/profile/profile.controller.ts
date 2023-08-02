import { Controller, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto } from 'src/common/dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(profileDto: ProfileDto) {
    await this.profileService.createProfile(profileDto);
  }
}

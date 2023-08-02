import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/common/entitiy/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async createProfile(profileDto) {
    const addProfile = await this.profileRepository.save({
      gender: profileDto.gender,
      photo: profileDto.photo,
    });

    return {
      success: true,
      message: 'Created Successfull',
      result: addProfile,
    };
  }

  async findAll() {
    return await this.profileRepository.find();
  }
}

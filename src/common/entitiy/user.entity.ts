import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userid: number;

  @OneToOne(() => User, (user) => user.parent)
  @JoinColumn({ name: 'user_id' })
  parent: User;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}

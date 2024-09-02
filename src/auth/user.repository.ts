import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { AuthCredetialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.manager); // Initialize with Task entity and manager
  }

  async SignUpUser(authCredentialDto: AuthCredetialsDto): Promise<User> {
    const { username, password } = authCredentialDto;

    const user = new User();
    user.username = username;
    user.password = password;
    try {
      return await user.save();
    } catch (error) {
      console.log(error.code);
    }
  }
}

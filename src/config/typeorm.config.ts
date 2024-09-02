import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Task } from 'src/tasks/task.entity';


export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'bill@521358',
  database: 'taskmanagement',
  //entities: [__dirname + '/../**/*.entity.ts'],
  entities: [Task, User],
  synchronize: true,
};

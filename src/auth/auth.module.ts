import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])], //prepares user repository for injection via DI
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) => new UserRepository(dataSource), // Create repository manually
      inject: [DataSource], // Inject DataSource
    },
  ],
})
export class AuthModule {}

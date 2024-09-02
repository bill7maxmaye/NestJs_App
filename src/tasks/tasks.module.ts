import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
//import { Task } from './task.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TasksController],
  providers: [
    TasksService,
    {
      provide: TaskRepository,
      useFactory: (dataSource: DataSource) => new TaskRepository(dataSource), // Create repository manually
      inject: [DataSource], // Inject DataSource
    },
  ],
})
export class TasksModule {}

import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Param
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
// import { Request, Response } from 'express';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  // getTasks(@Req() req, @Res() res): Response {
  //   return res.send('Hello world!');
  // }
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log(task.title, task.description);
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(task);
    console.log(id);
    return 'Update a task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log(id);
    return `Delete a task ${id}`;
  }
}

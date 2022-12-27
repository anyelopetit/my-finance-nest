import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async getTasks() {
    return this.taskModel.find().exec();
  }

  async getTask(id: string) {
    return this.taskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    console.log('newTask', newTask);
    return await newTask.save();
  }

  // private tasks: Task[] = [
  //   {
  //     id: 1,
  //     title: 'Task One',
  //     description: 'This is task one',
  //     done: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Task Two',
  //     description: 'This is task two',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Task Three',
  //     description: 'This is task three',
  //     done: false,
  //   },
  // ];

  // getTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTask(id: string): Task {
  //   return this.tasks.find((task) => task.id.toString() === id);
  // }

  // createTask(title: string, description: string, done: boolean) {
  //   const task = {
  //     id: Math.random(),
  //     title,
  //     description,
  //     done,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
}

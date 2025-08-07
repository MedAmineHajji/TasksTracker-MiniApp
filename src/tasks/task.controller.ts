import { Controller, Get, Post, Patch, Param, Body , NotFoundException } from '@nestjs/common';
import { TasksService } from './task.service';
import { TaskStatus } from '../schemas/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
async findOne(@Param('id') id: string) {
  const task = await this.tasksService.findOne(id);
  if (!task) {
    throw new NotFoundException('Task not found');
  }
  return task;
}

  @Post()
  create(@Body() body: { title: string; description: string }) {
    return this.tasksService.create(body.title, body.description);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: TaskStatus }) {
    return this.tasksService.updateStatus(id, body.status);
  }
}
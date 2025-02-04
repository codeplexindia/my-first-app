import { Injectable } from '@angular/core';
import { NewTaskdata } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.Tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.Tasks.filter((task) => task.userId === userId);
  }

  addTask(task: NewTaskdata, userId: string) {
    this.Tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}

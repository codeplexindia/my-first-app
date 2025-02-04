import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskdata } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;

  //private tasksService: TaskService;

  constructor(private taskService: TaskService) {}

  //private tasksService = new TaskService();

  dummyUserTask = DummyTasks;

  get selectedUserTask() {
    //return this.dummyUserTask.filter((task) => task.userId === this.userId);
    return this.taskService.getUserTasks(this.userId);
  }

  //onCompleteTask(id: string) {
  //this.dummyUserTask = this.dummyUserTask.filter((task) => task.id !== id);
  //this.taskService.removeTask(id);
  //}

  onOpenAddTask() {
    this.isAddingTask = true;
  }

  onDialogCloseClick(isClose: boolean) {
    this.isAddingTask = isClose;
  }

  //onAddTask(task: NewTaskdata) {
  // this.dummyUserTask.push({
  //   id: Math.random().toString(),
  //   userId: this.userId,
  //   title: task.title,
  //   summary: task.summary,
  //   dueDate: task.date,
  // });
  //this.taskService.addTask(task, this.userId);
  //this.isAddingTask = false;
  //}
}

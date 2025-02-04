import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskdata } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  @Output() addTask = new EventEmitter<NewTaskdata>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TaskService);

  closeDialog() {
    this.close.emit(false);
  }

  onSubmit() {
    if (
      this.enteredTitle === '' ||
      this.enteredSummary === '' ||
      this.enteredDate === ''
    ) {
      alert('Please fill all the fields');
    } else {
      // const newTask = {
      //   title: this.enteredTitle,
      //   summary: this.enteredSummary,
      //   date: this.enteredDate,
      // };
      // this.addTask.emit(newTask);
      this.tasksService.addTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          date: this.enteredDate,
        },
        this.userId
      );
      this.close.emit(false);
    }
  }
}

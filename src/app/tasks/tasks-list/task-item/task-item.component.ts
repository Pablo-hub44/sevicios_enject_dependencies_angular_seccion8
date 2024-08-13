import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TASK_STATUS_OPTIONS, TaskStatus } from '../../task.model';
import { TasksService } from '../../../services/tasks.service';
import { TasksServiceToken } from '../../../../main';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  //otra forma de inyectar una dependencia
  private tasksService = inject(TasksServiceToken);//antes TasksService

  //traemos nuestros estatus inyectandolos
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  tasks = this.tasksService.tasks;

  task = input.required<Task>();
  taskStatus = computed(() => {
    switch (this.task().status) {
      case 'OPEN':
        return 'Open';
      case 'IN_PROGRESS':
        return 'Working on it';
      case 'DONE':
        return 'Completed';
      default:
        return 'Open';
    }
  });

  onChangeTaskStatus(taskId: string, status: string) {
    let newStatus: TaskStatus = 'OPEN';

    switch (status) {
      case 'open':
        newStatus = 'OPEN';
        break;
      case 'in-progress':
        newStatus = 'IN_PROGRESS';
        break;
      case 'done':
        newStatus = 'DONE';
        break;
      default:
        break;
    }

    //mandamos a actualizar el status
    this.tasksService.updateTaskStatus(taskId, newStatus);
  }
}

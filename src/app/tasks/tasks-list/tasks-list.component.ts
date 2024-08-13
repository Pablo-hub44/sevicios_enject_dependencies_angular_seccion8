import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
//import { TasksService } from '../../services/tasks.service';
import { TasksServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, taskStatusOptionProvider } from '../task.model';
//import { TASK_STATUS_OPTIONS, TaskStatusOptions } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[taskStatusOptionProvider]
})
export class TasksListComponent {
  //otra forma de inyectar una dependencia
  private tasksService = inject(TasksServiceToken);//TasksService

  //sin signal  private selectFilter = 'all';
  //con signal
  private selectedFilter = signal<string>('all');

  //traemos nuestros estatus inyectandolos
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  //tasks = this.tasksService.allTasks;
  tasks = computed(() => {//computed pk estamos usando signal
    //con swich ponemos cada opcion
    switch (this.selectedFilter()) {
      case 'all':
        return this.tasksService.allTasks();
        break;
      case 'open':
        return this.tasksService.allTasks().filter(task => task.status === 'OPEN');
        break;
      case 'in-progress':
        return this.tasksService.allTasks().filter(task => task.status === 'IN_PROGRESS');
        break;
      case 'done':
        return this.tasksService.allTasks().filter(task => task.status === 'DONE');
        break;
      //si no es ninguno ..
      default:
        return this.tasksService.allTasks();
        break;
    }
  });


  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}

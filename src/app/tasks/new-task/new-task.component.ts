import { TasksServiceToken } from './../../../main';

import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // private tasksService: TasksService;

  //inyeccion de dependencias como parametro SI
  constructor(@Inject(TasksServiceToken) private tasksService:  TasksService){//antes TasksService pero estamos provando otra manera
    //aqui no va
    //this.tasksService = new TasksService();
  }

  /**
   * 
   * @param title 
   * @param description 
   */
  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title:title, desctiption: description})

    //limpiar el form
    this.formEl()?.nativeElement.reset();
  }
}

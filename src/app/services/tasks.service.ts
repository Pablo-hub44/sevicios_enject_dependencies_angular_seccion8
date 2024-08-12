import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //tasks =[];

  //con signal
  private _tasks = signal<Task[]>([]);

  allTasks = this._tasks.asReadonly(); 

  //se puede poner setters y getter en angular :O
  public get tasks() {
    return this._tasks;
  }
  public set tasks(value) {
    this._tasks = value;
  }

  constructor() { }

  addTask(taskData: {title:string; desctiption:string}){
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
      description: ''
    }

    this.tasks.update((oldTasks)=>{
      return [...oldTasks, newTask]//se crea una copia con lso datos actualizados
    })
  }


  /**
   * 
   * @param taskId 
   * @param newStatus 
   */
  updateTaskStatus(taskId: string, newStatus: TaskStatus){
    this._tasks.update((oldTask)=>{
      //iteramos en cada tarea
      return oldTask.map((task)=>{
        return task.id === taskId ? {...task,status: newStatus }: task
      })
    })
  }


}

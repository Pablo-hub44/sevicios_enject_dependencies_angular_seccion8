
import { InjectionToken, Provider } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done',
  taskStatus: TaskStatus,
  text: string
}[];

//exportamos nuestro token de inyeccion personalizado
export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('task-status-options')

export const TaskStatusOptions: TaskStatusOptions = [//{}[] esto quiere dcir array de objetos
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open'
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'In-Progress'
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed'
  },
];

//lo pnemos aca , lo usaremos en el tasklist component
export const taskStatusOptionProvider: Provider = {

  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions

}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

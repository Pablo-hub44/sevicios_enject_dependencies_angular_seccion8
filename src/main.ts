import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/services/tasks.service';
import { InjectionToken } from '@angular/core';

//el normal
// bootstrapApplication(AppComponent).catch((err) => console.error(err));

//nuestro propio token de inyeccion personalizado, le ponemos el tipo de dato pk sino lo deja en unknown
export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

//otra manera de inyectar una dependencia, dentro del bootstrapapplication, si no pusieramos su inyectable cosa q no pasa xd 
bootstrapApplication(AppComponent,{
    providers: [TasksService, {provide: TasksServiceToken, useClass: TasksService}]
    //esto de provider seria la fomra larga con un token de inyeccion personlizado de proporcionar un service a la application
}).catch((err) => console.error(err));




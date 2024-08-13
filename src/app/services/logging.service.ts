import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  
  constructor() { }

  /**
   * 
   * @param mesagge 
   */
  log(mesagge: string){
    const timeStamp = new Date().toLocaleDateString();
    
    console.log("timeStamp: ", timeStamp);
    console.log("mesagge: ", mesagge);


  }
}

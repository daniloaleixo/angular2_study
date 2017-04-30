import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLog(mgs: string){
  	console.log(mgs);
  }

}

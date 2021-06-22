import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  id!: string;

  constructor() {}

  public setProf(id:string){
    this.id = id
    window.alert(this.id)
  }

  public getProf(){
    window.alert(this.id)
    return this.id
  }
}

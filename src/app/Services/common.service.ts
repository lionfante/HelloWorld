import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public age = 0;
  constructor() { }
  public TangTuoi(){
    this.age++;
  }
}

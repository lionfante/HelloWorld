import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public age = 0;
  constructor(private common: CommonService){ 
    this.age = common.age;
  }
  public TangTuoi(){
    this.common.age++;
    this.age = this.common.age;
  }
}

import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = "Phu";
  public age = 20;
  public vehicles = ["Toyota","Honda","Yamaha"];
  constructor(private common: CommonService){ 
    this.age = common.age;
  };

  public ClickHandler(){
    //alert(this.name);
    console.log(this.name);
  }
  public TangTuoi(){
    this.common.age++;
    this.age = this.common.age;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name = "Phu";
  public age = 20;
  public vehicles = ["Toyota","Honda","Yamaha"];
  constructor(){ };

  public ClickHandler(){
    //alert(this.name);
    console.log(this.name);
  }
}

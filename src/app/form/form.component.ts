import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public Username = "";
  public Password = "";
  public vehicles = ["Toyota","Honda","Yamaha"];
  private selectVehicle = "";
  constructor(){}
  public onSubmit(){
    console.log(this.Username);
    console.log(this.Password);
    console.log(this.selectVehicle);
  }
  public selectedVehicle(event:any){
    this.selectVehicle = event.target.value;
  }
}

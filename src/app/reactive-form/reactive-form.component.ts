import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public profileForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl()
  });
  constructor(){ }
  onSubmit(){
    console.log(this.profileForm.controls.name.value);
    console.log(this.profileForm.controls.age.value);
  }
}

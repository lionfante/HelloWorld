import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public age = 0;
  public name = "";
  public gender = "";
  public comments : any;
  public posts : any;
  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
    ){ 

  }
  ngOnInit(): void{
    this.serverHttp.getProfile().subscribe(data => {
      this.age = data.age,
      this.name = data.name,
      this.gender = data.gender
    });
    this.serverHttp.getComment().subscribe(data => {
      this.comments = data;
    });
    this.serverHttp.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
  public TangTuoi(){
    this.common.age++;
    this.age = this.common.age;
  }
  public addPost(){
    var data = {
      "id": this.posts.length > 0 ? this.posts.length + 1 : 1,
      "title": "json-server5",
      "author": "typicode5"
    };
    this.serverHttp.addPost(data).subscribe(data => {
      this.posts.push(data);
    });
  }
}

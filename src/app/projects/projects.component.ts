import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos: Array<any> = []
  link: string  
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('https://api.github.com/users/JustinCast/repos')
      .subscribe(
        data => {
          for(let key in data){
            if(data.hasOwnProperty(key)){
              this.repos.push(data[key]);
            }
           }
        },
        err =>{
          console.log(err)
        }
      )

      console.log('REPOS')
      console.log(this.repos)
  }

  redirect(index){
    window.open(String(this.repos[index].html_url), "_blank");
  }
}
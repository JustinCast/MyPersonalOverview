import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FancyPreloaderTypes } from 'ngx-fancy-preloader';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos: Array<any> = []
  link: string  
  loading: boolean
  // type: string = FancyPreloaderTypes.EVIL_NORMAL
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('https://api.github.com/users/JustinCast/repos')
      .subscribe(
        data => {
          this.loading = true
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
      this.loading = false
      console.log('REPOS')
      console.log(this.repos)
  }

  redirect(index){
    window.open(String(this.repos[index].html_url), "_blank");
  }
}

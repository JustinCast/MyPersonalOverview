import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FancyPreloaderTypes } from 'ngx-fancy-preloader';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos = []
  reposToRender = []
  link: string  
  loading: boolean
  languageFilterState: boolean = false
  primaryFilterState: boolean = true
  allLanguages: Array<any> = []
  filterSwitch = "Hide filters"
  conditions = [
    "By Language",
    "Most Popular",
    "Most Forked",
    "Most cloned",
    "Most watchers"
  ]
  // type: string = FancyPreloaderTypes.EVIL_NORMAL
  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('https://api.github.com/users/JustinCast/repos')
      .subscribe(
        data => {
          this.loading = true
          for(let key in data){
            if(data.hasOwnProperty(key)){
              this.reposToRender.push(data[key])
            }
          }
        },
        err =>{
          console.log(err)
        }
      )
      this.loading = false
      this.repos = this.reposToRender
      // console.log('REPOS')
      // console.log(this.repos)
  }

  chargeAllLenguages(){
    for (var index = 0; index < this.repos.length; index++) {
      if((!this.allLanguages.includes(this.repos[index].language)) && (this.repos[index].language !== null))
        this.allLanguages.unshift(this.repos[index].language)
    }
  }

  redirect(index){
    window.open(String(this.repos[index].html_url), "_blank");
  }

  filterRepos(c){
    switch (c) {
      case "By Language":
        this.chargeAllLenguages()
        this.languageFilterState = true
        break
      case "Most Popular":
        break
      case "Most Forked":
        break
      case "Most cloned":
        break
      case "Most watchers":
        break;
    
      default:
        break;
    }
  }
  displayReposByLanguage(l) {
    this.reposToRender = []
    for (var index = 0; index < this.repos.length; index++) {
      if(this.repos[index].language === l)
        this.reposToRender.unshift(this.repos[index])
    }
  }

  switchFilters() {
    switch (this.filterSwitch) {
      case "Hide filters":
        this.reposToRender = this.repos
        this.languageFilterState = false
        this.primaryFilterState = false
        this.filterSwitch = "Show Filters"
        break
    
      case "Show Filters":
        this.primaryFilterState = true
        this.filterSwitch = "Hide filters"
        break

      default:
        break;
    }
  }
}
